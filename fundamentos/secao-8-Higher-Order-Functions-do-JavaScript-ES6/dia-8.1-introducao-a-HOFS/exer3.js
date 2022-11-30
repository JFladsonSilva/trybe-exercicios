const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let points = 0;

const corretorDeExame = (corrects, student, () => {
    
    corrects.forEach(response => {
        student.forEach(studen => {
            if(studen === response){
                points =+ 1;
            } if (studen === 'N.A') {
                points = points;
            } else {
                studen =- 0.5;
            }
        })
        return points;
    });
})

console.log(corretorDeExame(RIGHT_ANSWERS, STUDENT_ANSWERS));