
// a bunch of poorly named variables
var h = [], t = [], v = [];
// data bookkeeping for curve plot
let trajectory = [], time = [];

//time step
var dt = 0.05;

//gravity
var g =- 9.8

//puts the stick figure + ball in the right place
var studentat = 220
var offset=-0.5;

//these are not for the simulation, but for plotting 
var q=[0,0];
var tt=[0,0];


//Initial values for default simulation
var startheight= 200
var ar=0
var v0= 0


//Traces are what is to be plotted
var trace1 = {
  x: t,
  y: h,
  mode: 'markers',
  marker: {size: [20,10], color: ['blue', 'red'],},
  name: 'Ball'
};

var trace2 = {
  x: time,
  y: trajectory,
  mode: 'lines',
  name: 'Position vs Time',
  line: {shape: 'spline'}
};

var trace3 = {
  x: t,
  y: h,
  mode: 'lines',
  name: 'Position Now'
};
var trace4 = {
  x: tt,
  y: q,
  mode: 'lines',
  name: 'Time Now'
};



var layout = {
  legend: {
    x: 1,
    xanchor: 'right',
    y: 1
  },
  xaxis: {
    title: " time (s)",
    range: [-2, 10]}
    ,
  yaxis: {
    title: " position (m)",
    range: [0, 320]
    },
  autosive: false,
  width: 700,
  height: 500,
  margin: {
    l: 50,
    r: 50,
    b: 100,
    t: 100,
    pad: 4
  },
  paper_bgcolor: 'white',
  plot_bgcolor: 'white',
  images: [
      {
        "source": "https://i.imgur.com/YucR7RY.png",
        "xref": "x",
        "yref": "y",
        "x": - 1.3,
        "y": studentat,
        "sizex": 20,
        "sizey": 200,
        "opacity": 1,
        "layer": "below"
      }
    ]
};


//Simulation Initialized, takes a starting height, air resistance and an intial velocity
function initialize(sh,air, vi){
    startheight=Number(sh)
    ar= Number(air)
    v0=Number(vi)*1.0
    console.log(v0)
    trajectory = [startheight]
    time = [0]

    

    //trajectory[0]= startheight;
    //time[0] = 0;

    for (i = 0; i < 2; i++) {
    h[i] = startheight;
    t[i] = 0;
    v[i] = v0;
    }
    //q is for plotting purposes
    q[1]=startheight
    t[0]=offset 
    
    Plotly.newPlot('graph', 
    [trace1,  {
      x: time,
      y: trajectory,
      mode: 'lines',
      name: 'Position vs. Time',
      line: {shape: 'spline'}}, trace3, trace4],layout
    )

    //stick figure position
    studentat= startheight+20
    layout = {
      legend: {
          x: 1,
          xanchor: 'right',
          y: 1
        },
    xaxis: {
      title: ' time(s) ',
      range: [-2, 10]
      },
    yaxis: {
      title: ' position (m) ',
      range: [0, 320]
      },
      autosize: false,
      width: 700,
      height: 500,
      margin: {
          l: 50,
          r: 50,
          b: 100,
          t: 100,
          pad: 4
      },
      paper_bgcolor: 'white',
      plot_bgcolor: 'white',
      images: [
          {
              "source": "https://i.imgur.com/YucR7RY.png",
              "xref": "x",
              "yref": "y",
              "x": - 1.3,
              "y": studentat,
              "sizex": 20,
              "sizey": 200,
              "opacity": 1,
              "layer": "below"
          }
         ]
      };
}


// intialize the plot so there is something nice to look at
initialize(startheight,ar, v0)



function compute () {

    // The two solutions are actually not "simply" analyiticaly related, so have to determine case
    if(ar>0){
      // If air resistance, calculate velocity closed form and numerically determine position
      v[1] = (g/ar) -((g/ar)-v0)*Math.exp(-ar*t[1])
      h[1] +=v[1]*dt*1.0;
    } else{ 
      // Otherwise just use free fall equations
      v[1] = g*t[1] +v0
      h[1] = 0.5*g*t[1]*t[1] +v0*t[1] + startheight
    }

    // increment time for plotting
    t[1] +=  dt;
    
    // copy values for plotting use
    h[0]=h[1]
    q[1]=h[1]
    tt[0]=t[1]
    tt[1]=t[1]

    //push current values to the curve tracer
    time.push(t[1])
    trajectory.push(h[1])
 
}

// update loop that terminates when the ball hits the ground. not sure how to interupt it onclick yet.
function update () {

  //call the compute function above
  compute(); 

  //Animate the graph traces. The second trace has to be put in by hand for some reason? 
  Plotly.animate('graph', {
    data: [
      trace1,  
      {
        x: time,
        y: trajectory,
        mode: 'lines',
        name: 'Position',
        line: {shape: 'spline'}
        }, 
      trace3,
      trace4]
  }, {
    transition: {
      duration: 0.0,
    },
    frame: {
      duration: 0.0,
      redraw: false,
    }
  });

  //kill the loop if the ball landed
  if (h[1]> 0){
  requestAnimationFrame(update)
  }
}



///////////////// Sliders and Buttons and other dongles

//This lets the button start the simulation
function startUpdate(){
  initialize(sliderx.value,sliderar.value*0.01, sliderv.value)
  update()
}

//Poorly named sliders because I'm lazy
var sliderx = document.getElementById("myRangex");
var outputx = document.getElementById("f");
outputx.innerHTML = sliderx.value; // Display the default slider value

var sliderar = document.getElementById("myRangear");
var outputar = document.getElementById("g");
outputar.innerHTML = sliderar.value; // Display the default slider value

var sliderv = document.getElementById("myRangev");
var outputv = document.getElementById("h");
outputv.innerHTML = sliderv.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle). Probably a nicer way to
// do all of these at once
sliderx.oninput = function() {
  outputx.innerHTML = sliderx.value;
  initialize(sliderx.value, sliderar.value*0.01, sliderv.value)
}
sliderar.oninput = function() {
  outputar.innerHTML = sliderar.value;
  initialize(sliderx.value, sliderar.value*0.01, sliderv.value)
}

sliderv.oninput = function() {
  outputv.innerHTML = sliderv.value;
  initialize(sliderx.value, sliderar.value*0.01, sliderv.value)
}