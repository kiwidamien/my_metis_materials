function drawHangman(numMissed) {
    const svg = d3.selectAll('svg');

    svg.selectAll('*').remove();

    const lines = [
        [[5,250],  [250,250]],
        [[125,250],[125,5]],
        [[125,5], [200,5], [200,15]],
        [[180,15], [220,15], [220, 55], [180,55], [180, 15]],
        [[200,55], [200,150]],
        [[200,150],[150,200]],
        [[200,150],[250,200]],
        [[150,80],[200,100]],
        [[250,80],[200,100]]
    ];

    const toDraw = lines.slice(0, numMissed);

    const lineFunction = d3.line()
          .x( (d) => d[0])
          .y( (d) => d[1]);

    svg.selectAll('path')
        .data(toDraw)
        .enter()
        .append('path')
        .attr("d", d => lineFunction(d))
        .attr("stroke", "#e8a061")
        .attr("stroke-width", 2)
        .attr("fill", "none");
};
