+++
title = 'Architecture'
date = 2025-08-28T20:32:23-04:00
draft = true
+++

A computer application is a sequence of machine instructions stored in memory. The binary numbers that make up the program are meaningful only in how the CPU interprets and executes them.

{{< youtube 1I5ZMmrOfnA >}}

## Basic System Components

The fundamental architecture consists of:

- CPU  
- Memory  
- Input/output devices  
- System bus connecting all components  

{{< figure src="/images/system.png" alt="System Diagram" width="400px" >}}

{{< youtube fpnE6UAfbtU >}}

## CPU Structure

The CPU is composed of four main parts:

1. Control Unit  
   - Retrieves and decodes instructions from memory  
   - Manages data transfers between CPU and memory  

2. Execution Unit  
   - Carries out the actual instruction operations  

3. Registers  
   - Small, fast storage locations inside the CPU for temporary data  

4. Flags  
   - Status indicators that reflect the outcome of operations  

{{< figure src="/images/control.png" alt="System Diagram" width="500px" >}}

{{< youtube FZGugFqdr60 >}}

## System Clock Synchronization

The entire fetch-execute cycle runs in sync with the system clock, an oscillator that emits square-wave pulses at precise intervals.

{{% notice style="primary" title="note" style="tip" %}}

You might hear the term word throughout this. A **word** is just `two bytes` of data. A **dword** is `four bytes` of data. A **qword** is `eight bytes` of data.

{{% /notice %}}
