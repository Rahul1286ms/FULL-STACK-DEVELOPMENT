

function fizzBuzz(n) {

    let count3 = 0;
    let count5 = 0;

    for (let i = 0; i <= n; i++) {

        let str = "";

        if (count3 === 3) {
            str += 'fizz';
            count3 = 0;
        }
        if (count5 === 5) {
            str += 'buzz';
            count5 = 0;
        }
        if (str === '') {
            str += i;
        }
        console.log(str);

        count3++;
        count5++;

    }
}

fizzBuzz(20);