+++
title = '5. Instruction Pointer Register'
date = 2025-08-29T10:50:59-04:00
draft = true

weight = 50
+++

## Instruction Pointer Register (EIP)

The **Instruction Pointer** (EIP on IA-32/x86) is one of the most important registers when working at the assembly / binary level. It holds the address of the **next instruction** the CPU will execute and therefore directly controls program flow.

{{% notice style="primary" title="info" style="info" %}}
**EIP points to the next instruction.** Changing EIP changes what code the CPU executes next — this is why the register is central to control-flow, debugging, and reverse engineering.
{{% /notice %}}

## EXTRA

- **Role:** EIP contains the address of the next instruction to execute. The CPU fetches the instruction at `EIP`, executes it, then advances EIP to the following instruction (or to a target address when a branch/call/ret occurs).  
- **Read / Observe:** Debuggers and disassemblers display EIP so analysts can follow program execution and see exactly which instruction is about to run.  
- **Modify (conceptually):** EIP can be changed by normal control-flow instructions (jumps, calls, returns) or — in debugging contexts — by the user to alter execution order for testing or analysis.  
- **Why reverse engineers care:** Controlling or observing EIP lets you understand program logic, follow execution paths, and identify how a program reacts to inputs or branches.  

## Conceptual Example

As you can see here , the function `unreachableFunction` are not called in the `main` function. During runtime, the program will not execute the code inside unreachableFunction. However, we can view it in the assembly and we'll try to redirect the instruction pointer (EIP) to that function using the GDB debugger. You’ll find information about [GDB](/Cheatsheets/Tools/gdb/) in the [Tools section](/Cheatsheets/Tools/).  
It’s okay if this isn’t entirely clear yet. Throughout the course, we’ll explore many examples that will help us internalize these concepts. Just stay curious.

{{% notice style="red" %}}

```c
#include <stdio.h>

void unreachableFunction(void) {
  puts("You reached an unreachable function!");
}

int main(void) {
  puts("Hello World!");
  return 0;
}
```

{{% /notice %}}

{{% notice color="black" title="About binary" icon="fa-solid fa-info-circle" %}}

- **Compiling** (build a 32-bit)

`gcc -m32 -o hello hello.c`

```bash
file hello  

hello: ELF 32-bit LSB pie executable, Intel i386, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux.so.2, BuildID[sha1]=e4c4eb152501056b7c1feedda4338dffaa27c027, for GNU/Linux 3.2.0, with debug_info, not stripped
```

```bash
./hello 
Hello World!

gdb hello #For Analysing the binary
```

{{% /notice %}}

```bash
(gdb) info functions
All defined functions:

Non-debugging symbols:
0x00001000  _init
0x00001030  __libc_start_main@plt
0x00001040  puts@plt
0x00001050  __cxa_finalize@plt
0x00001060  _start
0x00001090  __x86.get_pc_thunk.bx
0x000010a0  deregister_tm_clones
0x000010e0  register_tm_clones
0x00001130  __do_global_dtors_aux
0x00001180  frame_dummy
0x00001189  __x86.get_pc_thunk.dx

0x0000118d  unreachableFunction   < THE FUNCTION
0x000011b8  main                  < MAIN

0x000011f4  __x86.get_pc_thunk.ax
0x000011f8  _fini
```

{{% notice style="blue" %}}

```asm
(gdb) b main #breakpoint at main function
(gdb) r #run
(gdb) set disassembly-flavor intel
(gdb) disass main

Dump of assembler code for function main:
   0x565561b8 <+0>:     lea    ecx,[esp+0x4]
   0x565561bc <+4>:     and    esp,0xfffffff0
   0x565561bf <+7>:     push   DWORD PTR [ecx-0x4]
   0x565561c2 <+10>:    push   ebp
   0x565561c3 <+11>:    mov    ebp,esp
   0x565561c5 <+13>:    push   ebx
   0x565561c6 <+14>:    push   ecx
=> 0x565561c7 <+15>:    call   0x565561f4 <__x86.get_pc_thunk.ax> #[EIP now is HERE]
   0x565561cc <+20>:    add    eax,0x2e28
   0x565561d1 <+25>:    sub    esp,0xc
   0x565561d4 <+28>:    lea    edx,[eax-0x1fc7]      # Prepare argument for puts
   0x565561da <+34>:    push   edx                   # Push argument for puts
   0x565561db <+35>:    mov    ebx,eax               # Save relocation base in ebx
   0x565561dd <+37>:    call   0x56556040 <puts@plt> # Call puts("Hello World!")
   0x565561e2 <+42>:    add    esp,0x10
   0x565561e5 <+45>:    mov    eax,0x0
   0x565561ea <+50>:    lea    esp,[ebp-0x8]
   0x565561ed <+53>:    pop    ecx
   0x565561ee <+54>:    pop    ebx
   0x565561ef <+55>:    pop    ebp
   0x565561f0 <+56>:    lea    esp,[ecx-0x4]
   0x565561f3 <+59>:    ret
```

```asm
  (gdb) disass unreachableFunction
Dump of assembler code for function unreachableFunction:
   0x0000118d <+0>:     push   ebp
   0x0000118e <+1>:     mov    ebp,esp
   0x00001190 <+3>:     push   ebx
   0x00001191 <+4>:     sub    esp,0x4
   0x00001194 <+7>:     call   0x11f4 <__x86.get_pc_thunk.ax>
   0x00001199 <+12>:    add    eax,0x2e5b
   0x0000119e <+17>:    sub    esp,0xc
   0x000011a1 <+20>:    lea    edx,[eax-0x1fec]      # Prepare argument for puts
   0x000011a7 <+26>:    push   edx                   # Push argument for puts
   0x000011a8 <+27>:    mov    ebx,eax               # Save relocation base in ebx
   0x000011aa <+29>:    call   0x1040 <puts@plt>     # Call puts("You reached an unreachable function!")
   0x000011af <+34>:    add    esp,0x10
   0x000011b2 <+37>:    nop
   0x000011b3 <+38>:    mov    ebx,DWORD PTR [ebp-0x4]
   0x000011b6 <+41>:    leave
   0x000011b7 <+42>:    ret
```

{{% /notice %}}
