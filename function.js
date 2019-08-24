let age = prompt('How old are you?')

function drive(age){
    if (age == 18) {
        alert('You can drive a small car.');    
    }else if (age > 18 && age < 24) {
        alert('You can drive a big car.');
    }else if (age >= 24){
        alert('You can drive a truck');
    }else{
        alert('You are too young to drive');
    }
}

drive(age);
