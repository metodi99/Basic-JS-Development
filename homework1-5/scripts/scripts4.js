function squad(girls,boys) {
    if(girls<10 && boys<10) {
    console.log(`Girls: 0${girls} Boys: 0${boys}`);
    }
    else if (girls<10 && boys>=10) {
    console.log(`Girls: 0${girls} Boys: 0${boys}`);    
    }
    else if (girls>=10 && boys<10) {
    console.log(`Girls: ${girls} Boys: 0${boys}`);
    }
    else {
    console.log(`GirlsL ${girls} Boys: ${boys}`);
}
}

squad(2,4);
squad(11,6);
squad(12,5);
squad(10,13);
