import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DailyRegistrationService } from './daily-registration.service';
import * as _ from 'lodash';

@Component({
  selector: 'daily-registration-chart',
  styleUrls: ['./daily-registration-chart.component.scss'],
  templateUrl: './daily-registration-chart.component.html',
})
export class DailyRegistrationChartComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  drOptions: any = {};
  arOptions: any = {};
  auuOptions: any = {};
  auuo5Options: any = {};
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              private drService: DailyRegistrationService,
  ) {
  }

  ngAfterViewInit() {
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
          // {
          //   name: 'Android',
          //   type: 'bar',

          //   data: [10, 52, 200, 334, 390, 330, 10, 52, 200, 334, 390, 330],
          // },
          // {
          //   name: 'IOS',
          //   type: 'bar',

          //   data: [10, 52, 200, 334, 390, 330, 10, 52, 200, 334, 390, 330],
          // },
          // {
          //   name: 'TOTAL',
          //   type: 'bar',

          //   data: [10, 52, 200, 334, 390, 330, 10, 52, 200, 334, 390, 330],
          // },
        ],
      };
      const record = this.drService.getChartData("none");
      console.log(JSON.stringify(record));
      // this.drOptions = this.arOptions = this.auuOptions = this.auuo5Options = this.options;
      this.drOptions = _.cloneDeep(this.options);
      this.drOptions.xAxis[0].data = record.dailyRegistration.xAxisData;
      this.drOptions.series = record.dailyRegistration.series;
   
      this.arOptions = _.cloneDeep(this.options);
      this.arOptions.xAxis[0].data = record.accumulatedRegistration.xAxisData;
      this.arOptions.series = record.accumulatedRegistration.series;

      this.auuOptions = _.cloneDeep(this.options);
      this.auuOptions.xAxis[0].data = record.airtimeUniqueUser.xAxisData;
      this.auuOptions.series = record.airtimeUniqueUser.series;
      
      this.auuo5Options = _.cloneDeep(this.options);
      this.auuo5Options.xAxis[0].data = record.airtimeUniqueUserOver50k.xAxisData;
      this.auuo5Options.series = record.airtimeUniqueUserOver50k.series;
      
      
    });
    

  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
