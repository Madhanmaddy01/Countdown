let count = 10;
let timer = document.getElementById('timer');
let wish = document.getElementById('wish');
timer.innerHTML =count;

setTimeout(()=>{
    count--;
    timer.innerHTML = count;
    setTimeout(()=>{
        count--;
        timer.innerHTML = count;
        setTimeout(()=>{
            count--;
            timer.innerHTML = count;
            setTimeout(()=>{
                count--;
                timer.innerHTML = count;
                setTimeout(()=>{
                    count--;
                    timer.innerHTML = count;
                    setTimeout(()=>{
                        count--;
                        timer.innerHTML = count;
                        setTimeout(()=>{
                            count--;
                            timer.innerHTML = count;
                            setTimeout(()=>{
                                count--;
                                timer.innerHTML = count;
                                setTimeout(()=>{
                                    count--;
                                    timer.innerHTML = count;
                                    setTimeout(()=>{
                                        count--;
                                        timer.innerHTML = count;
                                        setTimeout(()=>{
                                            timer.style="display:none";
                                            wish.style="display:block";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
