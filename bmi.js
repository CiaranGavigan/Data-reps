    class Bmi
    {
        constructor(height, weight){
            this.height = height;
            this.weight = weight;

        }

        calculate()
        {
            let bmi = this.weight/(this.height**2);
        }


    }
let bmi = new MyBmi(2, 90);
let calc = myBmi.calculate();
console.log(calc);