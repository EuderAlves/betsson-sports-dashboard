import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  monthlyBetsOptions: any;
  popularSportsOptions: any;
  userGrowthOptions: any;
  betDistributionOptions: any;
  topCountriesOptions: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.setupMonthlyBets(data.monthlyBets);
      this.setupPopularSports(data.popularSports);
      this.setupUserGrowth(data.userGrowth);
      this.setupBetDistribution(data.betDistribution);
      this.setupTopCountries(data.topCountries);
    });
  }

  setupMonthlyBets(data: any) {
    this.monthlyBetsOptions = {
      xAxis: { type: 'category', data: data.labels },
      yAxis: { type: 'value' },
      series: [{ data: data.data, type: 'bar', color: '#FF6600' }],
    };
  }

  setupPopularSports(data: any) {
    this.popularSportsOptions = {
      tooltip: { trigger: 'item' },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: data.labels.map((label: any, index: any) => ({
            value: data.data[index],
            name: label,
          })),
          color: [
            '#FF6600',
            '#00AEEF',
            '#333333',
            '#FF9900',
            '#FFCC00',
            '#B22222',
          ],
        },
      ],
    };
  }

  setupUserGrowth(data: any) {
    this.userGrowthOptions = {
      xAxis: { type: 'category', data: data.labels },
      yAxis: { type: 'value' },
      series: [{ data: data.data, type: 'line', color: '#00AEEF' }],
    };
  }

  setupBetDistribution(data: any) {
    this.betDistributionOptions = {
      tooltip: { trigger: 'item' },
      series: [
        {
          type: 'pie',
          radius: '50%',
          data: data.categories.map((category: any, index: any) => ({
            value: data.values[index],
            name: category,
          })),
          color: ['#FF6600', '#00AEEF', '#FFCC00', '#333333'],
        },
      ],
    };
  }

  setupTopCountries(data: any) {
    this.topCountriesOptions = {
      xAxis: { type: 'category', data: data.countries },
      yAxis: { type: 'value' },
      series: [{ data: data.values, type: 'bar', color: '#FF6600' }],
    };
  }
}
