import Source = require("../Source");

class PowerSource extends Source {

    Init(sketch?: Fayde.Drawing.SketchContext): void {

        this.PowerConnections = 0;
        super.Init(sketch);
    }

}

export = PowerSource;