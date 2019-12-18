import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-dashboard',
  templateUrl: './analytics-dashboard.component.html',
  styleUrls: ['./analytics-dashboard.component.css']
})
export class AnalyticsDashboardComponent implements OnInit {

  chartOptions = {
    responsive: true
    };
  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' }
  
  ];
  chartLabels = ['January', 'February', 'March', 'April'];
  chartDatan = [
    { data: [137, 500,100], label: 'User Distribution' }
  
  ];
  chartLabelsn = ['Active', 'At Stations', 'In Maintainence'];
  onChartClick(event) {
    console.log(event);
  }
  
  bikes_no: number=22;
  users_no: number=9;
  kms_count: number=11515;
  av_rides: number=9;
  constructor() { }

  ngOnInit() {
  }

}
