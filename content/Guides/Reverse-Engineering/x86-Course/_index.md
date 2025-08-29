+++
title = 'x86 Course'
date = 2025-08-28T18:23:32-04:00
draft = true
[params]
  menuPre = '<i class="fa-solid fa-microchip"></i> '
+++

## x86 Assembly Language

{{< youtube 75gBFiFtAb8 >}}

+ x86 Assembly is a family of backward-compatible languages dating back to the Intel 8000 series of microprocessors.
+ It uses mnemonics to represent CPU instructions and produces object code for x86 processors.
+ **Syntax Variants** Two main syntaxes exist: **AT&T** (source before destination) and **Intel** (destination before source).
+ Intel syntax is dominant when disassembling or debugging both Windows PE and Linux ELF binaries.

{{% notice style="primary" title="info" style="info" %}}

+ A PE `(Portable Executable)` file is a file format used by Windows for executables (.exe), dynamic libraries (.dll) and system drivers (.sys), which contains information needed by the operating system to load and execute the code.

+ An ELF `(Executable and Linkable Format)` file is a standard file format for executable files, object code, shared libraries, and core dumps on Unix-like operating systems like Linux.

{{% /notice %}}

## Environment and Platform Focus

+ Tutorials will concentrate on Linux Assembly using {{% badge style="blue" icon="rocket" %}}Intel syntax{{% /badge %}} , paired with {{% badge style="red" icon="skull-crossbones" %}}C source code{{% /badge %}} for disassembly practice.
+ **Architecture Emphasis** The course emphasizes 32-bit architecture, since 32-bit programs run on both 32-bit and 64-bit systems, making them common targets.

{{% notice style="primary" title="x32 == x86 ?" style="note" %}}
The terms x86 and x32 are often confused, but x86 is a family of instruction set architectures from Intel and AMD that includes both 16-bit and 32-bit (and even 64-bit > x86_64) processors, while x32 is not a standard term; 32-bit systems are **correctly referred to as "x86"** or "IA-32". The term "x86" comes from the Intel 8086 processor, and its successors like the 80186, 80286, 80386, and 80486, all of which ended in "86".
{{% /notice %}}
