const  gameoflife = 
                    <><h1>Conway's Game of Life</h1> The Game of Life, also known as the Conway's Game of Life, is a cellular automaton simulation created by the British mathematician John Horton Conway in 1970. It simulates the behavior of a population of cells on a grid, where each cell can be in one of two states: alive or dead. The state of each cell in the next generation is determined by a set of rules based on the number of alive cells in the surrounding 8 cells. The simulation can produce complex and evolving patterns, which can be used to model a wide range of systems, including biological populations and artificial intelligence. <p></p> </>
const gol = 
<>
    <h1>
    Rules:
    </h1>
    <br/>
    <ol>
        <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
    </ol>
    <p>
    These rules are applied to every cell in the grid simultaneously in each generation. The grid can be of any size, and the initial state of the cells can be chosen randomly or according to a specific pattern. The Game of Life can produce a wide range of complex and evolving patterns, depending on the initial conditions and the rules.
    </p>
</>


const glider = 
        <>
            <h1>The Glider :</h1>
            
                <p>A Glider is a specific pattern in Conway's Game of Life that was discovered by Richard K. Guy and Bill Gosper in 1970. It is a pattern of five cells that moves diagonally across the grid in a consistent pattern. It is interesting because, it is a pattern that can move across the grid, it seems to be alive and is self-sustaining, it is created by a small set of living cells and it can move to different position on the grid, it is known as a "spaceship" pattern. It is also one of the smallest pattern that moves and can be used to build more complex patterns.
                <br/>The glider has been used to illustrate the concept of "life" in the Game of Life, as it can sustain itself and move across the grid. It has also been used to explore the idea of emergence, as the behavior of the glider is not predictable from the behavior of the individual cells that make it up, but instead emerges from the interactions between those cells. Additionally, the idea of the glider has been used to explore the concept of universality, as the glider pattern can be created in a variety of different initial conditions and rules, and the behavior of the glider is consistent across those different conditions.
                </p>
        </>
const rpentomonio = <>
    <h1>
    R-pentomino :
    </h1>
    
    <p>
    An R-pentomino is a specific pattern in Conway's Game of Life that was discovered by John Horton Conway in 1970. It is a pattern of five cells that creates a simple but interesting shape. It is interesting because it creates a complex pattern in a short amount of time, after few generations it starts to blink and then eventually dies. It is also known as a "methuselah" pattern because of its longevity.
    <br/>
    The R-pentomino has been used to illustrate the concept of "death" in the Game of Life, as it eventually dies after a few generations. It also highlights the idea of unpredictability, as the pattern evolves and dies in an unexpected way. Additionally, the R-pentomino has been used to explore the concept of randomness, as the behavior of the pattern is not determined by the initial conditions but rather by the random evolution of the cells.
    </p>
</>
 const queenbeespaceship = <>
 <h1>
 Queen Bee spaceship :
 </h1>
 
 <p>
 The Queen Bee spaceship (QBS) is a specific pattern in Conway's Game of Life that was discovered by David Bell in 1971. It is a pattern of 13 cells that moves diagonally across the grid in a consistent pattern. It is interesting because it is a relatively large pattern that moves and leaves behind a trail of debris, it is a "spaceship" pattern and it is one of the smallest known spaceships.
     <br/>
     The Queen Bee spaceship can be used to illustrate the concept of "complexity" in the Game of Life, as it is a relatively complex pattern that is created by the interactions between a relatively small number of cells. It also highlights the idea of emergence, as the behavior of the QBS is not predictable from the behavior of the individual cells that make it up, but instead emerges from the interactions between those cells. Additionally, the Queen Bee spaceship has been used to explore the concept of universality, as it can be created in a variety of different initial conditions and rules, and the behavior of the QBS is consistent across those different conditions.
 </p>
</>
const gosperglidergun = <>
<h1>
Gosper Glider Gun :
</h1>

<p>
The Gosper Glider Gun is a specific pattern in Conway's Game of Life that was discovered by Bill Gosper in 1970. It is a pattern of 36 cells that generates a stream of gliders indefinitely. It is interesting because it is a "gun" pattern that creates an infinite stream of gliders and it is one of the most well-known and studied pattern in Game of Life.
    <br/>
    The Gosper Glider Gun can be used to illustrate the concept of "reproduction" in the Game of Life, as it continually generates new gliders indefinitely. It also highlights the idea of self-replication and the concept of machine, as it is a pattern that can indefinitely produce new patterns. Additionally, the Gosper Glider Gun has been used to explore the concept of complexity, as it is a relatively complex pattern that is created by the interactions between a relatively small number of cells.
</p>
</> 
 const acorn = <>
 <h1>
 Acorn :
 </h1>

 <p>
 The Acorn is a specific pattern in Conway's Game of Life that was discovered by Bill Gosper in 1970. It is a pattern of 7 cells that creates a simple but interesting shape. It is interesting because it creates a complex pattern in a short amount of time and it is known as a "methuselah" pattern because of its longevity.
     <br/>
     The Acorn has been used to illustrate the concept of "life" and "death" in the Game of Life, as it is a pattern that can sustain itself for a relatively long time before eventually dying. It also highlights the idea of unpredictability, as the pattern evolves in an unexpected way. Additionally, the Acorn has been used to explore the concept of randomness, as the behavior of the pattern is not determined by the initial conditions but rather by the random evolution of the cells.
 </p>
</>
const pulsar = <>
<h1>
Pulsar :
</h1>

<p>
A Pulsar is a specific pattern in Conway's Game of Life that was discovered by John Horton Conway in 1970. It is a pattern of 13 cells that blink at regular intervals. It is interesting because it creates a stable, periodic pattern that blinks at regular intervals and it is one of the most well-known and studied pattern in Game of Life.
    <br/>
    The Pulsar can be used to illustrate the concept of "regularity" and "stability" in the Game of Life, as it creates a stable pattern that blinks at regular intervals. It also highlights the idea of predictability, as the pattern evolves in a predictable way. Additionally, the Pulsar has been used to explore the concept of periodicity, as it is a pattern that repeats itself over time.
</p>
</>
 const beacon  = <>
 <h1>
 Beacon :
 </h1>
 
 <p>
    A Beacon is a specific pattern in Conway's Game of Life that was discovered by John Horton Conway in 1970. It is a pattern of 6 cells that blink at regular intervals, and it is interesting because it is a simple pattern that creates a stable periodic blink, it is also known as a "still life" pattern and it is one of the most well-known and studied pattern in Game of Life.
     <br/>
    The Beacon can be used to illustrate the concept of "stability" in the Game of Life, as it creates a stable pattern that blinks at regular intervals. It also highlights the idea of predictability, as the pattern evolves in a predictable way. Additionally, the Beacon has been used to explore the concept of symmetry, as it is a pattern that has a high degree of symmetry.
 </p>
</>

 const blinker = <>
 <h1>
 Blinker :
 </h1>

 <p>
    A Blinker is a specific pattern in Conway's Game of Life that was discovered by John Horton Conway in 1970. It is a pattern of three cells that blink at regular intervals, it can be thought of as a simple oscillator, as it keeps switching between two states. It is interesting because it creates a simple but stable periodic blink, it is also known as an "oscillator" pattern and it is one of the most well-known and studied pattern in Game of Life.
     <br/>
    The Blinker can be used to illustrate the concept of "stability" in the Game of Life, as it creates a stable pattern that blinks at regular intervals. It also highlights the idea of predictability, as the pattern evolves in a predictable way. Additionally, the Blinker has been used to explore the concept of simplicity, as it is a simple pattern that creates a stable blink.
 </p>
</>
 const toad = <>
 <h1>
 Toad :
 </h1>
 
 <p>
A Toad is a specific pattern in Conway's Game of Life that is an oscillator with a period of 2 generations. It was discovered by John Horton Conway in 1970. It is a pattern of six cells that oscillates between two forms, it is interesting because it is a simple oscillator pattern, it is also known as an "oscillator" pattern and it is one of the most well-known and studied pattern in Game of Life
     <br/>
The Toad can be used to illustrate the concept of "stability" in the Game of Life, as it creates a stable pattern that oscillates between two forms at regular intervals. It also highlights the idea of predictability, as the pattern evolves in a predictable way. Additionally, the Toad has been used to explore the concept of simplicity, as it is a simple pattern that creates a stable oscillation between two forms.
 </p>
</>
const blocklayingswitchengine = <>
<h1>
Block Laying Switch Engine
</h1>

<p>
    A Block laying switch engine (BLSE) is a specific pattern in Conway's Game of Life that is a complex pattern that is capable of building and destroying blocks and switching between different configurations. It was discovered by Noam Elkies in 1991. It is a pattern of 46 cells that oscillates between a number of different forms and it is interesting because it is a complex pattern that can build and destroy blocks, it is also known as a "constructor" pattern and it is one of the most well-known and studied pattern in Game of Life.
    <br/>
    The BLSE can be used to illustrate the concept of "complexity" and "constructability" in the Game of Life, as it creates a complex pattern that can build and destroy blocks. It also highlights the idea of unpredictability, as the pattern can switch between different configurations in an unexpected way. Additionally, the BLSE has been used to explore the concept of universality, as it can be created in a variety of different initial conditions and rules, and the behavior of the BLSE is consistent across those different conditions.
</p>
</>
const lineFractal = <>
    

</>

export const information = [
    gameoflife, gol, glider, rpentomonio, queenbeespaceship, gosperglidergun ,acorn ,pulsar ,beacon , blinker, toad, blocklayingswitchengine
]