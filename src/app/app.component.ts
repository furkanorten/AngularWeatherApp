import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService) {}

  weatherData? : WeatherData
  tmpCityName: string = 'Ankara'
  cityName: string = 'Ankara'

  ngOnInit(): void {
    this.getWeatherData(this.tmpCityName)
  }

  onSubmit() {
    this.getWeatherData(this.cityName)
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getweatherData(cityName).subscribe(res => {
      this.weatherData = res
      this.tmpCityName = this.cityName
    },
    error => {
      alert(cityName + ' city can not be found!')
    })
  }

}
