class Juego{
    constructor(columnas,filas){
        this.columnas = columnas;
        this.filas = filas;
        this.malla = [];
    }

    setSize(columnas,filas){
        this.columnas = columnas;
        this.filas = filas;

        for (let x = 0; x < columnas; x++) {
            let fila = [];
            for (let y = 0; y < filas; y++) {
                fila.push(false);               
            }
            this.malla.push(fila);
        }
    }

    changeCell(columna,fila){
        this.malla[columna][fila] = !this.malla[columna][fila];
    }

    update(play){
        if (play) {
            let viven=[];
            let mueren=[];
            for (let x = 0; x < this.columnas; x++) {
                for (let y = 0; y < this.filas; y++) {
                    let vecinos = 0;

                    //1
                    try {
                        if (this.malla[x-1][y-1]) {
                            vecinos += 1;
                        }                    
                    } catch (error) {
                        //pass
                    }

                    //2
                    try {
                        if (this.malla[x][y-1]) {
                            vecinos += 1;
                        }                    
                    } catch (error) {
                        //pass
                    }

                    //3
                    try {
                        if (this.malla[x+1][y-1]) {
                            vecinos += 1;
                        }                    
                    } catch (error) {
                        //pass
                    }

                    //4
                    try {
                        if (this.malla[x-1][y]) {
                            vecinos += 1;
                        }                    
                    } catch (error) {
                        //pass
                    }

                    //5
                    try {
                        if (this.malla[x+1][y]) {
                            vecinos += 1;
                        }                    
                    } catch (error) {
                        //pass
                    }

                    //6
                    try {
                        if (this.malla[x-1][y+1]) {
                            vecinos += 1;
                        }                    
                    } catch (error) {
                        //pass
                    }

                    //7
                    try {
                        if (this.malla[x][y+1]) {
                            vecinos += 1;
                        }                    
                    } catch (error) {
                        //pass
                    }

                    //8
                    try {
                        if (this.malla[x+1][y+1]) {
                            vecinos += 1;
                        }                    
                    } catch (error) {
                        //pass
                    }
                    

                    //reglas                    
                    //nace
                    if(vecinos == 3){
                        viven.push({x:x,y:y});
                        //console.log("vive",x,y);
                    }

                    //muere
                    if(vecinos > 3 || vecinos < 2){
                        mueren.push({x:x,y:y});
                        //console.log("muere",x,y);
                    }
                }
            }

            viven.forEach(element => {
                try {
                    this.malla[element.x][element.y] = true;                    
                } catch (error) {
                    //pass
                }
            });

            mueren.forEach(element => {
                try {
                    this.malla[element.x][element.y] = false;                    
                } catch (error) {
                    //pass
                }
            });   
        }
    }

    show(escala){
        for (let x = 0; x < this.columnas; x++) {
            for (let y = 0; y < this.filas; y++) {
                let existe = null;
                try {
                    existe = this.malla[x][y];                    
                } catch (error) {
                    //console.info("no hay malla");
                }
                if (existe) {
                    fill(255);
                    rect(x*escala,y*escala,escala,escala);
                }              
            }
        }
    }

}

const juego = new Juego(0,0);