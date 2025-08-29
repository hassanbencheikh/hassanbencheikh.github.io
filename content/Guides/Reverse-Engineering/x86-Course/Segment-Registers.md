+++
title = '4. Segment Registers'
date = 2025-08-29T10:32:50-04:00
draft = true
weight = 40
+++

The **segment registers** are used for referencing memory locations in the x86 architecture.  
We will focus on the **flat memory model**, which is the most relevant today.  

{{% notice style="primary" title="Tip" style="tip" %}}
In the flat memory model, your program runs in a **4GB address space**. Any 32-bit register can address memory within that space, except for areas reserved by the operating system.  
{{% /notice %}}

{{% notice style="primary" title="info" style="info" %}}

+ In 32-bit x86, registers and memory addresses are 32 bits wide.

+ A 32-bit number can represent 2^32 = 4,294,967,296 unique values.

+ That means the maximum addressable space = 4 GB `(from 0x00000000 to 0xFFFFFFFF)`.

{{% /notice %}}

## The 6 Segment Registers

| Register | Role / Usage |
|----------|--------------|
| **CS**  | **Code Segment** – stores the base address of the code section (`.text`). The CPU fetches instructions from here using CS + EIP. *(Programs cannot modify CS directly; it is managed by the processor.)* |
| **DS**  | **Data Segment** – default location for program variables (`.data`). |
| **ES**  | **Extra Segment** – used in string operations. |
| **SS**  | **Stack Segment** – base address of the stack. Works with **ESP** (stack pointer) and **EBP** (base pointer). |
| **FS**  | Extra segment register, available for data. |
| **GS**  | Extra segment register, available for data. |

## Key Points

+ Each segment register is **16-bit** wide and points to the start of a memory segment.  
+ The **CS** register controls which instructions are executed by pointing to the code segment.  
+ **DS, ES, FS, GS** point to data segments, allowing separation of different types of data.  
+ **SS** points to the stack segment, used for function calls, local variables, and procedure data.  
+ Segment registers are tightly controlled by the **operating system** and usually cannot be modified directly by programs.  
