class Weather {
    constructor(city, state) {
        this.apiKey = '';
        this.city = city;
        this.state = state;
    }

    async getWeather() {
        // Weather Underground Free API No longer Available
        // const response = await fetch(``);
        // const responseData = await responseData.json();
        // return responseData.current_observation;

        return {
            display_location: {
                full: `${this.city}, ${this.state}`
            },
            weather: "Partly Cloudy",
            temperature_string: "43.7 F (6.5C)",
            icon_url: "http://icons-ak.wxug.com/i/c/k/partlycloudy.gif",
            relative_humidity: "40%",
            feelslike_string: "36 F (2 C)",
            dewpoint_string: "21 F (-6 C)",
            wind_string: "From the NNW at 16.0 MPH Gusting to 26.0 MPH"
        };
    }

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}