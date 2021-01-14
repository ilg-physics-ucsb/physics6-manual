//Initial Values
var h0=20.0, v0=0.0, g=-9.8, m= 1;

// data bookkeeping for curve plot
let h_traj = [h0], v_traj= [v0], time = [0];
let PE_traj = [], KE_traj= [];
var t_final=0

//Max Sim Time, step size
var tmax=1000, dt=0.015

PE_traj[0]=- m*g*h0;
KE_traj[0]=0.5*v0*v0*m;
var TE =PE_traj[0]+KE_traj[0]

// a bunch of poorly named variables
var h = [h0], v = [v0], t=[0], step=0;





//Plotted Data
var trace_PE= {
    x: time.slice(0,step),
    y: PE_traj.slice(0,step),
    name: "Potential Energy",
    mode: 'lines',
    marker: {color: ['blue']},
    
}
var trace_KE= {
    x: time.slice(0,step),
    y: KE_traj.slice(0,step),
    mode: 'lines',
    name: "Kinetic Energy",
    marker: {color: ['red']}

}
var trace_live= {
    x: [1],
    y: h,
    name: "Position",
    mode: 'markers',
    marker: {size: [20], color: ['red'],},
}
var trace_active_KE= {
    x: time.slice(step,step),
    y: KE_traj.slice(step,step),
    mode: 'markers',
    name: "Kinetic Energy",
    marker: {size: [15], color: ['red'],},
    showlegend: false

}
var trace_active_PE= {
    x: time.slice(step,step),
    y: KE_traj.slice(step,step),
    mode: 'markers',
    name: "Potential Energy",
    marker: {size: [15], color: ['blue'],},
    showlegend: false
}
//graph layout









layout_graph = {
    showlegend: 'true',
    legend: {
        x: 1,
        xanchor: 'right',
        y: 1,
        "orientation": "h"
      },
    xaxis: {
        title: ' time(s) ',
        range: [0, t_final],
        standoff: 40,
        automargin: false,
    },
    yaxis: {
        automargin: true,
        title: {
            text:' Energy (J) ',
            standoff: 10
        },
        range: [-0.2, 400]
    },
    autosize: false,
    width: 800,
    height: 400,
    margin: {
        l: 0,
        r: 50,
        b: 50,
        t: 50,
        pad: 4
    },
    paper_bgcolor: 'white',
    plot_bgcolor: 'white',
    };


layout_demo = {
    xaxis: {
        range: [0.5, 1.5],
        standoff: 40,
        automargin: true,
        showgrid: false,
        zeroline: false,
        showline: false,
        autotick: true,
        ticks: '',
        showticklabels: false
    },
    yaxis: {
        automargin: true,
        title: {
            text:' Height (m) ',
            standoff: 20
        },
        range: [-0.2, 40]
    },
    autosize: false,
    width: 200,
    height: 400,
    margin: {
        l: 50,
        r: 0,
        b: 50,
        t: 50,
        pad: 4
    },
    paper_bgcolor: 'white',
    plot_bgcolor: 'white',
    images: [
        {
            "source": "https://i.imgur.com/YucR7RY.png",
            "xref": "x",
            "yref": "y",
            "x": 1.5,
            "y": 1,
            "sizex": 20,
            "sizey": 20,
            "opacity": 1,
            "layer": "below"
        }
       ]
    };

function initialize(h_0,v_0){
    h0=Number(h_0)
    v0=Number(v_0)
    time=[0]
    h_traj=[h0]
    v_traj=[v0]
    PE_traj=[- m*g*h0];
    KE_traj=[0.5*v0*v0*m];
    step=0;
    //Create Time Array and Trajectories
    for (i=1; i<tmax; i++){
        time[i] = i*dt;
        if (h_traj[i-1]>0.1){
        h_traj[i] = 0.5*g*time[i]*time[i] + v0*time[i] + h0
        v_traj[i] =  g*time[i] + v0
        PE_traj[i-1] = - m*g*h_traj[i-1]
        KE_traj[i-1] = 0.5* m*v_traj[i-1]*v_traj[i-1]
        } else{
            h_traj[i]=0
            v_traj[i]=v_traj[i-1]
            t_final = i*dt
            break
        }
    
        
    
    }

    h = [h0], v = [v0], t=[0], step=0;

    //Update Traces
    trace_PE.x=time.slice(0,step+1)
    trace_PE.y=PE_traj.slice(0,step+1)
    trace_KE.x=time.slice(0,step+1)
    trace_KE.y=KE_traj.slice(0,step+1)
    trace_active_PE.x=time.slice(step,step+1)
    trace_active_PE.y=PE_traj.slice(step,step+1)
    trace_active_KE.x=time.slice(step,step+1)
    trace_active_KE.y=KE_traj.slice(step,step+1)
    trace_live.y=h
    
    layout_graph.xaxis.range=  [0, t_final*1.1];
    
    var studentat=h0+4
    layout_demo.images= [
                {
                    "source": "https://i.imgur.com/YucR7RY.png",
                    "xref": "x",
                    "yref": "y",
                    "x": 0.6,
                    "y": studentat,
                    "sizex": 40,
                    "sizey": 40,
                    "opacity": 1,
                    "layer": "below"
                }
            ]
    
    //Plot panel
    Plotly.newPlot('graph',
        [
            trace_PE,
            trace_KE,
            trace_active_KE,
            trace_active_PE] , layout_graph,{displayModeBar: false}
    )
    //PlotSimulation
    Plotly.newPlot('demo',
    [
        trace_live
    ], layout_demo, {displayModeBar: false}
    )



}




initialize(h0,v0)


function compute(){
    step+=1;
    t[0]=time[step];
    h[0]=h_traj[step];
    v[0]=v_traj[step]

}

function update () {
    //call the compute function above
    compute();
 
    //Update Traces
    trace_PE.x=time.slice(0,step+1)
    trace_PE.y=PE_traj.slice(0,step+1)
    trace_KE.x=time.slice(0,step+1)
    trace_KE.y=KE_traj.slice(0,step+1)
    trace_active_PE.x=time.slice(step,step+1)
    trace_active_PE.y=PE_traj.slice(step,step+1)
    trace_active_KE.x=time.slice(step,step+1)
    trace_active_KE.y=KE_traj.slice(step,step+1)

    Plotly.animate('graph', {
      data: [
        trace_PE,
        trace_KE,
        trace_active_KE,
        trace_active_PE
      ]
    }, {
      transition: {
        duration: 0.0,
      },
      frame: {
        duration: 0.0,
        redraw: false,
      }
    });
    Plotly.animate('demo', {
        data: [
          trace_live ]
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
    if (h[0]> 0){
    requestAnimationFrame(update)
    } else{
     h = [h0]; v = [v0]; t=[0]; step=0;
     trace_live= {
        x: [1],
        y: h,
        name: "Position",
        mode: 'markers',
        marker: {size: [20], color: ['red'],},
    }
    }
  }



  function startUpdate(){
    update()
  }
    


  var slider_h = document.getElementById("myRange_h");
  var output_h = document.getElementById("h");
  output_h.innerHTML = slider_h.value; // Display the default slider value
  var sliderv = document.getElementById("myRangev");
  var outputv = document.getElementById("v");
  outputv.innerHTML = sliderv.value; // Display the default slider value

  var output_PE= document.getElementById("PE")
  var output_KE= document.getElementById("KE")
  var output_TE= document.getElementById("TE")

  slider_h.oninput = function() {
    output_h.innerHTML = slider_h.value;
    PE_traj[0]=-slider_h.value*g*m
    output_PE.innerHTML= PE_traj[0].toFixed(1)
    output_TE.innerHTML = (PE_traj[0]+KE_traj[0]).toFixed(1)
    initialize(slider_h.value,sliderv.value)

  }
  sliderv.oninput = function() {
    outputv.innerHTML = sliderv.value;
    KE_traj[0]=0.5*sliderv.value*sliderv.value*m
    output_KE.innerHTML= KE_traj[0].toFixed(1)
    output_TE.innerHTML = (PE_traj[0]+KE_traj[0]).toFixed(1)
    initialize(slider_h.value,sliderv.value)

  }
