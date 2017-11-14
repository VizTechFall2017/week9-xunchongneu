document.bgColor="#3c3c3c"


var width = d3.select('svg').attr('width');
var height = d3.select('svg').attr('height');

var marginLeft = 100;
var marginTop = 100;

var svg = d3.select('svg')
    .append('g')
    .attr('transform', 'translate(' + marginLeft + ',' + marginTop + ')');

//set up scales to position circles using the data
var scaleX = d3.scalePoint().domain(["","Jan", "Feb", "March", "Apr", "May", "June","July"]).range([0, 600]);
var scaleY = d3.scaleLinear().domain([0,400]).range([400, 0]);  //remember that 0,0 is at the top of the screen! 300 is the lowest value on the y axis

var nestedData = [];

// Add the x Axis
svg.append("g")
    .attr('transform','translate(0,400)')
    .attr("class", "axisRed")
    .attr('stroke-width', 2)//move the x axis from the top of the y axis to the bottom
    .call(d3.axisBottom(scaleX));

svg.append("g")
    .call(d3.axisLeft(scaleY))
    .attr("class", "axisRed")
    .attr('stroke-width', 2);


var makeLine = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.total);
    });

var makeLine1 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.TESLA);
    });


var makeLine2 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.JNJ);
    });

var makeLine3 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.JPM);
    });
var makeLine4 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.DIS);
    });
var makeLine5 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.APPL);
    });
var makeLine6 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.MSFT);
    });
var makeLine7 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.INTC);
    });
var makeLine8 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.COCA-COLA);
    });
var makeLine9 = d3.line()
    .x(function(d){
        return scaleX(d.age);
    })
    .y(function(d){
        return scaleY(d.MCD);
    });


//import the data from the .csv file
d3.csv('./xunData.csv', function(dataIn){

    nestedData = d3.nest()
        .key(function(d){return d.year})
        .entries(dataIn);

    var loadData = dataIn;

    svg.append('text')
        .text('Portfolio performance')
        .attr('transform','translate(300, -20)')
        .style('text-anchor','middle')
        .attr('fill', 'White');

    svg.append('text')
        .text('Time')
        .attr('transform','translate(260, 440)')
        .attr('fill', 'White');

    svg.append('text')
        .text('Price')
        .attr('transform', 'translate(-50,250)rotate(270)')
        .attr('fill', 'White');

    // Add the path
  /*  svg.selectAll('circles')
        .data(loadData)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.women)})
        .attr('r',5)
        .attr('fill','blue');*/

    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line')
        .attr('d', makeLine)
        .attr('fill', 'none')
        .attr('stroke', 'red')
        .attr('stroke-dasharray', 5);

    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.total)})
        .attr('data-toggle', "tooltip")
        .attr('title', function(d){
            return d.total;
        })
        .attr('r',3)
        .attr('fill','red');



    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.JPM)})
        .attr('data-toggle', "tooltip")
        .attr('title', function(d){
            return d.JPM;})
        .attr('r',3)
        .attr('fill','grey');

    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.JNJ)})
        .attr('data-toggle', "tooltip")
        .attr('title', function(d){
            return d.JNJ;})
        .attr('r',3)
        .attr('fill','grey');


    svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.TESLA)})
        .attr('data-toggle', "tooltip")
        .attr('title', function(d){
            return d.TESLA;})
        .attr('r',3)
        .attr('fill','grey');


 svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.DIS)})
        .attr('data-toggle', "tooltip")
        .attr('title', function(d){
            return d.DIS;})
        .attr('r',3)
     .attr('fill','grey');
 svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.APPL)})
        .attr('data-toggle', "tooltip")
        .attr('title', function(d){
            return d.APPL;})
        .attr('r',3)
     .attr('fill','grey');
 svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.MSFT)})
        .attr('data-toggle', "tooltip")
        .attr('title', function(d){
            return d.MSFT;})
        .attr('r',3)
     .attr('fill','grey');
 svg.selectAll('circles')
        .data(dataIn)
        .enter()
        .append("circle")
        .attr('cx',function(d){return scaleX(d.age)})
        .attr('cy',function(d){return scaleY(d.INTC)})
        .attr('data-toggle', "tooltip")
        .attr('title', function(d){
            return d.INTC;})
        .attr('r',3)
        .attr('fill','grey');




    $('[data-toggle="tooltip"]').tooltip();

    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line1')
        .attr('d', makeLine1)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;







    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line2')
        .attr('d', makeLine2)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;

    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line3')
        .attr('d', makeLine3)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;

    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line4')
        .attr('d', makeLine4)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;

    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line5')
        .attr('d', makeLine5)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;
    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line6')
        .attr('d', makeLine6)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;
    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line7')
        .attr('d', makeLine7)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;
    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line8')
        .attr('d', makeLine8)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;
    svg.append('path')
        .datum(dataIn)
        .attr('class', 'line9')
        .attr('d', makeLine9)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-width', 2)
    ;

});