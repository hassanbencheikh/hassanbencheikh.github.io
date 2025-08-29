+++
title = '3. General Purpose Registers'
date = 2025-08-29T06:46:26-04:00
draft = true

weight = 30
+++

Modern processors rely on **registers** to temporarily store data while executing instructions. Registers are small, high-speed storage locations directly inside the CPU, much faster than accessing RAM.  

In the **IA-32 (x86, 32-bit) architecture**, there are 8 general-purpose registers (GPRs). Although each can technically hold any type of data, many have **conventional roles** in programming and assembly.  

{{% notice style="primary" title="note" style="tip" %}}

A key feature of x86 is **backward compatibility**: even code written for 8-bit processors decades ago can still run on modern 64-bit CPUs.  

{{% /notice %}}

## The 8 General-Purpose Registers

| Register | Role / Typical Usage |
|----------|----------------------|
| **EAX**  | **Accumulator** – main register for arithmetic operations. Holds results of calculations and function return values. |
| **EBX**  | **Base register** – points to data in the **DS segment**. Often used to store the base address of data. |
| **ECX**  | **Counter** – used in loops and string operations (tracks repetition counts). |
| **EDX**  | General-purpose, also used in **I/O operations**. Extends EAX for 64-bit multiplication/division. |
| **ESI**  | **Source Index** – points to source data in memory (string/array operations). |
| **EDI**  | **Destination Index** – points to destination memory address (string/array operations). |
| **EBP**  | **Base Pointer** – points to the **bottom of the stack frame**. Used for referencing function parameters & local variables. |
| **ESP**  | **Stack Pointer** – points to the **top of the stack frame**. Used for stack management and local variable access. |

## Register Sizes and Naming

- All 8 registers are **32-bit wide** (4 bytes).  
- Some registers can also be accessed in **smaller parts**:  

{{< figure src="/images/x86reg.png" alt="System Diagram" width="500px" >}}

- **EAX → AX → AH / AL**  
- **EBX → BX → BH / BL**  
- **ECX → CX → CH / CL**  
- **EDX → DX → DH / DL**  
- Other registers (ESI, EDI, EBP, ESP) can also be referenced in **16-bit form**: SI, DI, BP, SP.  
