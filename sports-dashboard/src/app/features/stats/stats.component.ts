import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  monthlyBetsOptions = {
    title: {
      text: 'Projected Monthly Bets',
      subtext: 'Estimates for the upcoming months',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          1200, 1500, 1800, 2000, 2500, 3000, 3200, 3100, 3300, 4000, 4500,
          5000,
        ],
        type: 'line',
        smooth: true,
      },
    ],
  };

  // Dados para o gráfico de Popular Sports
  popularSportsOptions = {
    title: {
      text: 'Popular Sports Forecast',
      subtext: 'Projected popularity for upcoming years',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Popularity',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 50, name: 'Football' },
          { value: 20, name: 'Tennis' },
          { value: 15, name: 'Basketball' },
          { value: 10, name: 'Esports' },
          { value: 5, name: 'Hockey' },
          { value: 8, name: 'Baseball' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  // Dados para o gráfico de User Growth
  userGrowthOptions = {
    title: {
      text: 'User Growth Prediction',
      subtext: 'Expected user growth over the next years',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['2019', '2020', '2021', '2022', '2023', '2024'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [1000, 5000, 10000, 20000, 40000, 60000],
        type: 'line',
        smooth: true,
      },
    ],
  };

  // Dados para o gráfico de Bet Distribution
  betDistributionOptions = {
    title: {
      text: 'Bet Distribution Forecast',
      subtext: 'Estimated bet categories for the future',
      left: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Small Bets', 'Medium Bets', 'High Bets', 'VIP Bets'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [3000, 2000, 1000, 500],
        type: 'bar',
      },
    ],
  };

  // Dados para o gráfico de Top Countries
  topCountriesOptions = {
    title: {
      text: 'Top Countries Projections',
      subtext: 'Countries with the highest bet activity',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Bet Activity',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 5000, name: 'Sweden' },
          { value: 4000, name: 'Norway' },
          { value: 3500, name: 'Germany' },
          { value: 3200, name: 'Brazil' },
          { value: 3000, name: 'Spain' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
}
