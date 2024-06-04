function generarDistribucionUniforme(numA, numB, rnd) {
    
    return parseInt(numA) + (rnd * (numB-numA));

}

const generadorUniforme = {generarDistribucionUniforme};
export default generadorUniforme;
