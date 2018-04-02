# QA - Rendimiento<h1>
# Tracker v2 - Tópicos telemática <h2>

### 1. Redundancia de datos:
Se hizo una modificación en el front-end (Angular), lo cual condiciona el guardado de la localización solo cuando esta cambia teniendo en cuenta cierta tolerancia.

```javascript

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getLocation();
    clearInterval(this.auth.timer);
    this.auth.timer = setInterval(() => {
        if((this.lastLat===this.latitude) && (this.lastLon===this.longitude)){
          this.record = false;
        }
        else if((Math.abs(this.lastLat-this.latitude)!=0 && Math.abs(this.lastLat-this.latitude)<0.0000005) 
          || (Math.abs(this.lastLon-this.longitude)!=0 && Math.abs(this.lastLon-this.longitude)<0.0000005)){
          this.record = false;
        }
        else{
          this.record = true;
        }

        this.lastLat = this.latitude;
        this.lastLon = this.longitude;
        const location = new LocationModel(
          this.auth.userProfile.sub,
          this.latitude,
          this.longitude
        );
        if (this.validate.validateLocation(location) && this.record) {
          this.message = 'Recording location...';
          this.recording = true;
          this.api
            .postLocation$(location)
            .subscribe(
              res => { },
              err => {
                console.error(err);
                this.flash.show(
                  err.errorDescription,
                  { cssClass: 'alert-danger', timeOut: 900 }
                );
              }
            ); 
      }
    }, this.delay);
  }

```