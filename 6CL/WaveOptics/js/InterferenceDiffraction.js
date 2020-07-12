
//Initial Values
var S=0.25, W=0.04, lambda=0.000650, diff=true;

//Color: Red=0, 360= Vilot in HSL
light_color= 'hsla(0, 100%, 38%, 1)'
light_color_fill= 'hsla(0, 80%, 28%, 0.7)'


//Intensity plot:
let I_x =[], x_grid=[]

// Checkbox
var isdiff= document.getElementById("Diffraction")
isdiff.checked=true

//Intensity "image" Arrays:
let I_y =[], y_grid=[]

//Parameters
var screen_width=100.0, steps= 300, screen_distance =1000;


////////////////////////Functions//////////////////////////////
//make grid
for (i=0; i<steps;i++){
  x=-0.5*screen_width+ i * (screen_width/steps)
  x_grid.push(x)
}

//Intensity function
function I_theta_f(S,W,theta,lambda){
  if (diff===true){
    return (Math.cos(Math.PI*S*Math.sin(theta)/lambda)**2)*(sinc(Math.PI*W*Math.sin(theta)/lambda)**2)
  } else{
    return (Math.cos(Math.PI*S*Math.sin(theta)/lambda)**2)
  }
  
}
//Sinc function
function sinc(x){
  if(x==0){
    return 1;
  }else{
    return Math.sin(x)/x;
  }
}
  
function color_the_light(){
 var visible_range = (0.000700-0.000400) //length of visible range
 light_color_val= Math.max(Math.round((0.000700-lambda)/(visible_range)*250)-20,0)
 light_color= 'hsla('+light_color_val.toString()+', 100%, 31%, 1)'
 light_color_fill= 'hsla('+light_color_val.toString()+', 60%, 28%, 0.7)'
}



color_the_light()

///////////////////Plotted Data////////////////////////////////
var trace_pat= {
    x: x_grid,
    y: I_x,
    name: "Intensity",
    mode: 'lines',
    marker: {color: ['red']},
    line: {'shape': 'spline', 'smoothing': 2, color:light_color},
    fill: 'tozeroy',
    fillcolor: light_color_fill
    
}

var data = [
  {
    z: I_y,
    x: x_grid,
    y: x_grid,
    type: 'heatmap',
    showscale: false,
    colorscale:[[0,"black"], [1,light_color]]
  }
];

//graph layout


var layout_graph = {
    showlegend: 'true',
    legend: {
        x: 1,
        xanchor: 'right',
        y: 1,
        "orientation": "h"
      },
    xaxis: {
        side: 'top',
        title: ' Screen Position (mm) ',
        range: [-0.5*screen_width, 0.5*screen_width],
        standoff: 40,
        automargin: false,
        showline:false,
        zeroline:false
    },
    yaxis: {
        showline:false,
        zeroline:true,
        automargin: false,
        title: {
            text:' Relative Intensity ',
            standoff: 10
        },
        range: [0.0, 1.2]
    },
    autosize: false,
    width: 800,
    height: 250,
    margin: {
        l: 50,
        r: 60,
        b: 20,
        t: 100,
        pad: 4
    },
    paper_bgcolor: 'white',
    plot_bgcolor: 'white',
    };


var layout_demo = {
    xaxis: {
      range: [-0.5*screen_width, 0.5*screen_width],
        standoff: 40,
        automargin: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: false,
        ticks: '',
        showticklabels: false
    },
    yaxis: {
        automargin: true,
        title: {
            text:' Screen ',
            standoff: 20
        },
        range: [- 0.1*screen_width, 0.1*screen_width],
        showticklabels: false,
        autotick: true
    },
    autosize: false,
    width: 800,
    height: 100,
    margin: {
        l: 50,
        r: 50,
        b: 0,
        t: 0,
        pad: 4
    },
    paper_bgcolor: 'white',
    plot_bgcolor: 'black',
    };



var layout_demo2={
  xaxis: {
    range: [-0.5*screen_width, 0.5*screen_width],
      standoff: 40,
      automargin: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      autotick: false,
      ticks: '',
      showticklabels: false
  },
  yaxis: {
      automargin: true,
      title: {
          text:'Slits ',
          standoff: 20
      },
      range: [- 0.1*steps, 0.1*steps],
      autotick: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      autotick: false,
      ticks: '',
      showticklabels: false
  },
  autosize: false,
  width: 350,
  height: 85,
  margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 0,
      pad: 4
  },
  paper_bgcolor: 'white',
  plot_bgcolor: 'white'      
  }


  Plotly.newPlot('graph', 
      [
          trace_pat
        ] , layout_graph,{displayModeBar: false}
  )

Plotly.newPlot('demo', data , layout_demo,{displayModeBar: false})
Plotly.newPlot('demo2', data , layout_demo2 ,{displayModeBar: false})

function initialize(s,w,l){
  S=s*1.0
  W=w*1.0
  lambda= l*1.0

  layout_demo2.shapes=[
    //Center Barrier
    {
      type: 'rect',
      xref: 'x',
      yref: 'y',
      x0: -50*S,
      y0: -0.1*steps,
      x1: 50*S,
      y1: 0.1*steps,
      line: {
        color: 'rgb(59, 77, 74)',
        width: 0
      },
      fillcolor: 'rgb(59, 77, 74)'
    },
    //Right Barrier
    {
      type: 'rect',
      xref: 'x',
      yref: 'y',
      x0: 50*S+50*W,
      y0: -0.1*steps,
      x1: screen_width,
      y1: 0.1*steps,
      line: {
        color: 'rgb(59, 77, 74)',
        width: 0
      },
      fillcolor: 'rgb(59, 77, 74)'
    },
    //Left Barrier
    {
      type: 'rect',
      xref: 'x',
      yref: 'y',
      x0: -50*S-50*W,
      y0: -0.1*steps,
      x1: -screen_width,
      y1: 0.1*steps,
      line: {
        color: 'rgb(59, 77, 74)',
        width: 0
      },
      fillcolor: 'rgb(59, 77, 74)'
    },
  
  ]

  Plotly.newPlot('demo2', [] , layout_demo2 ,{displayModeBar: false})


  //Compute Intensity Plot
  for (i=0; i<steps;i++){
    x=-0.5*screen_width+ i * (screen_width/steps)
    th= - Math.atan(x/screen_distance)
    I_x[i] =I_theta_f(S,W,th,lambda)
  }
  //Compute Heatmap
  for (i=0; i<steps;i++){
    I_y[i]=I_x.map(function(x) { return Math.sqrt(x) *100*Math.exp(-0.008*(i-0.5*steps)**2); })
    }

    trace_pat.line.color=light_color
    trace_pat.fillcolor=light_color_fill
    data = [
      {
        z: I_y,
        x: x_grid,
        y: x_grid,
        type: 'heatmap',
        showscale: false,
        colorscale:[[0,"black"], [1,light_color]]
      }
    ];


  Plotly.animate('graph', 
    {
     traces: trace_pat
     }, 
    {
      transition: 
        {
          duration: 5000,
          easing: 'linear-in'
        },
      frame: 
      {
        duration: 500
      }
    },
    layout_graph
  
  )


  Plotly.newPlot('demo', data , layout_demo,{displayModeBar: false}
  )


  


}






initialize(0.25,0.04,0.000650)




  var slider_h = document.getElementById("myRange_h");
  var output_h = document.getElementById("h");
  output_h.innerHTML = slider_h.value; // Display the default slider value
  var sliderv = document.getElementById("myRangev");
  var outputv = document.getElementById("v");
  outputv.innerHTML = sliderv.value; // Display the default slider value
  var sliderar = document.getElementById("myRangear");
  var outputar = document.getElementById("ar");
  outputar.innerHTML = sliderar.value; // Display the default slider value


  slider_h.oninput = function() {
    output_h.innerHTML = slider_h.value;
    initialize(sliderv.value*0.001,slider_h.value*0.001, lambda)

  }
  sliderv.oninput = function() {
    outputv.innerHTML = sliderv.value;
    initialize(sliderv.value*0.001,slider_h.value*0.001,lambda)
  }
  sliderar.oninput = function() {
    outputar.innerHTML = sliderar.value;
    lambda=sliderar.value*0.000001
    color_the_light()
    initialize(sliderv.value*0.001,slider_h.value*0.001,lambda)
  }

  isdiff.oninput = function() {
    diff= isdiff.checked
    initialize(sliderv.value*0.001,slider_h.value*0.001,lambda)
  
  }
