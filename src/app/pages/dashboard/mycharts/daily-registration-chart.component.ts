import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import * as _ from 'lodash';

import { DailyRegistrationService } from './daily-registration.service';
import { DailyPagination } from './daily-pagination';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'daily-registration-chart',
  styleUrls: ['./daily-registration-chart.component.scss'],
  templateUrl: './daily-registration-chart.component.html',
})
export class DailyRegistrationChartComponent implements OnInit, OnDestroy {
  options: any = {};
  drOptions: any = {};

  dataset = [];
  arOptions: any = {};
  auuOptions: any = {};
  auuo5Options: any = {};
  themeSubscription: any;

  drList = [];
  pagedDrList = [];
  pager: any = {};

  constructor(private theme: NbThemeService,
    private drPagination: DailyPagination,
    private drService: DailyRegistrationService,
  ) {
  }

  ngOnInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        // color: [colors.primaryLight],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',

            // data: ['1105', '1106', '1107', '1108', '1109', '1110', '1105', '1106', '1107', '1108', '1109', '1110'],
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: echarts.axisLineColor,
              },
            },
            splitLine: {
              lineStyle: {
                color: echarts.splitLineColor,
              },
            },
            axisLabel: {
              textStyle: {
                color: echarts.textColor,
              },
            },
          },
        ],
        series: [
          {
            name: 'Android',
            type: 'bar',

            // data: [10, 52, 200, 334, 390, 330, 10, 52, 200, 334, 390, 330],
          },
          {
            name: 'IOS',
            type: 'bar',

            // data: [10, 52, 200, 334, 390, 330, 10, 52, 200, 334, 390, 330],
          },
          // {
          //   name: 'TOTAL',
          //   type: 'bar',

          //   data: [10, 52, 200, 334, 390, 330, 10, 52, 200, 334, 390, 330],
          // },
        ],
      };
      const record = this.drService.getChartData("none");
      this.drList = this.getDrArray(record);


      console.log(JSON.stringify(record));
      // this.drOptions = this.arOptions = this.auuOptions = this.auuo5Options = this.options;
      this.drOptions = _.cloneDeep(this.options);
      this.setPage(1);

      // this.drOptions.xAxis[0].data = record.dailyRegistration.xAxisData;
      // this.drOptions.series = record.dailyRegistration.series;

      // this.arOptions = _.cloneDeep(this.options);
      // this.arOptions.xAxis[0].data = record.accumulatedRegistration.xAxisData;
      // this.arOptions.series = record.accumulatedRegistration.series;

      // this.auuOptions = _.cloneDeep(this.options);
      // this.auuOptions.xAxis[0].data = record.airtimeUniqueUser.xAxisData;
      // this.auuOptions.series = record.airtimeUniqueUser.series;

      // this.auuo5Options = _.cloneDeep(this.options);
      // this.auuo5Options.xAxis[0].data = record.airtimeUniqueUserOver50k.xAxisData;
      // this.auuo5Options.series = record.airtimeUniqueUserOver50k.series;


    });


  }

  getDrArray(record) {
    let arr = [];

    for (let i = 0; i < record.dailyRegistration.xAxisData.length; i++) {
      arr.push({
        xAxis: record.dailyRegistration.xAxisData[i],
        Android: record.dailyRegistration.series[0].data[i],
        IOS: record.dailyRegistration.series[1].data[i],
      });
    }

    console.log('arr : ' + JSON.stringify(arr));

    return arr;
  }


  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      console.log("setPage constrict (page:" + page + ")");
      return;
    }

    // get pager objedct object from service
    this.pager = this.drPagination.getPager(this.drList.length, page);
    console.log("this.pager.pages.startIndex = " + this.pager.startIndex);
    // get current page of items
    this.pagedDrList = this.drList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log("pagedDrList.length = " + this.pagedDrList.length);
    {

      this.drOptions.xAxis[0].data = _.map(this.pagedDrList, (item) => {
        return item.xAxis;
      });
      console.log('setPage() xAxis = ' + JSON.stringify(this.drOptions.xAxis[0].data));

      const androidData = _.map(this.pagedDrList, (item) => {
        return item.Android;
      });
      console.log('setPage androidData = ' + JSON.stringify(androidData));

      const iosData = _.map(this.pagedDrList, (item) => {
        return item.IOS;
      });

      this.dataset = [];

      this.dataset.push(androidData);
      this.dataset.push(iosData);
      console.log("dataset" + JSON.stringify(this.dataset));
    }
  }


  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
