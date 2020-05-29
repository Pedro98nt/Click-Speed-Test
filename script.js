const clickSpeedTest = () => {
    return {
      cps: 0,
      cpsMax: 0,
      clicks: 0,
      timer: 0,
      timerUp: 0,
      focus: false,
      
      
      get cpsFixed () {
        return this.nornalize(this.cps)
      },
      
      get cpsMaxFixed () {
        return this.nornalize(this.cpsMax)
      },
  
      get clickingTime () {
        return this.nornalize((this.time - this.timer) / 1000, 1)
      },
      
      get time () {
        return new Date().getTime()
      },
  
      
      restart () {
        this.clicks = this.cps = this.cpsMax = 0
        this.timer = this.time - 1
      },
  
      mouseDown () {
        const now = this.time
  
        this.clicks++
  
        if (now - this.timerUp > 1000)
          this.restart()
  
        if (now - this.timer > 100)
          this.cps = this.clicks / ((now - this.timer) / 1000)
  
        if (now - this.timer > 1000)
          this.cpsMax = Math.max(this.cps, this.cpsMax)
      },
  
      mouseUp () {
        this.timerUp = this.time
      },
  
      nornalize (num, fix = 2) {
        return num.toFixed(fix)
      }
    }
  }