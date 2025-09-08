+++
date = '2025-08-31T01:14:45+01:00'
draft = true
title = '2. x64 Crash Course'

summary = "Learn the fundamentals of the 64-bit architecture and assembly language."
weight = 30
+++

The `x64 architecture` (also known as `AMD64` or `Intel 64`) is the 64-bit extension of the x86 instruction set.  
It powers modern operating systems and applications, providing access to vastly more memory and additional registers compared to 32-bit x86.

{{< alert icon="heart" cardColor="#448012ff" iconColor="#df4646ff" textColor="#f1faee" >}}
Understanding x64 builds directly on x86 knowledge. Focus on what's different: more registers, new addressing modes, and calling conventions.
{{< /alert >}}

## Modes of Operation

The `x64 processor` introduces new operational modes while maintaining backward compatibility with x86.

### Long Mode (Native 64-bit Mode)
- The `native mode` of x64 CPUs for 64-bit operating systems.
- Provides access to the full 64-bit address space and extended registers.
- Memory segmentation is largely disabled in favor of flat memory model.
- Used by modern 64-bit operating systems (Windows 10/11, Linux distributions, macOS).

### Compatibility Mode (Sub-mode of Long Mode)
- Allows `32-bit and 16-bit programs` to run on 64-bit operating systems.
- Programs execute as if running on a 32-bit processor.
- Transparent to the application - no recompilation needed.
- **Example:** Running old 32-bit games on Windows 11.

### Legacy Mode
- When 64-bit extensions are disabled, processor behaves like traditional x86.
- Includes Protected Mode, Real-Address Mode, and Virtual-8086 Mode.
- Rarely used in modern systems except during boot process.

{{< alert icon="circle-info" cardColor="#2ab91dff" iconColor="#1c70e6ff" textColor="#f1faee" >}}
**Key Difference from x86**: x64 eliminates Virtual-8086 mode in Long Mode and makes segmentation largely obsolete.
{{< /alert >}}

## Basic Execution Environment

### Address Space
- In `64-bit mode`, applications can theoretically address `16 exabytes (2^64 bytes)` of memory.
- In practice, current processors implement `48-bit virtual addressing`, allowing `256 terabytes` per process.
- Physical memory support varies by processor but can exceed `1 terabyte`.
- `Compatibility mode` maintains the 4 GB limit for legacy applications.

{{< alert icon="circle-info" cardColor="#2ab91dff" iconColor="#1c70e6ff" textColor="#f1faee" >}}
In 64-bit x64, addresses are 64 bits wide, but current implementations use only 48 bits.
This means the usable address range goes from **0x0000000000000000 to 0x0000FFFFFFFFFFFF**.
The upper 16 bits must be copies of bit 47 (canonical addressing).
{{< /alert >}}

## Basic Program Execution Registers

x64 significantly expands the register set compared to x86, providing more storage for improved performance.

### 64-bit General-Purpose Registers

`RAX` `RBX` `RCX` `RDX` `RBP` `RSP` `RSI` `RDI` `R8` `R9` `R10` `R11` `R12` `R13` `R14` `R15`

Each 64-bit register can be accessed in multiple sizes:

| 64-Bit | 32-Bit | 16-Bit | 8-Bit (Low) | 8-Bit (High) |
|--------|--------|--------|-------------|--------------|
| `RAX`  | `EAX`  | `AX`   | `AL`        | `AH`         |
| `RBX`  | `EBX`  | `BX`   | `BL`        | `BH`         |
| `RCX`  | `ECX`  | `CX`   | `CL`        | `CH`         |
| `RDX`  | `EDX`  | `DX`   | `DL`        | `DH`         |

Extended registers (R8-R15) have different naming conventions:

| 64-Bit | 32-Bit | 16-Bit | 8-Bit (Low) |
|--------|--------|--------|-------------|
| `R8`   | `R8D`  | `R8W`  | `R8B`       |
| `R9`   | `R9D`  | `R9W`  | `R9B`       |
| `R10`  | `R10D` | `R10W` | `R10B`      |
| `R11`  | `R11D` | `R11W` | `R11B`      |
| `R12`  | `R12D` | `R12W` | `R12B`      |
| `R13`  | `R13D` | `R13W` | `R13B`      |
| `R14`  | `R14D` | `R14W` | `R14B`      |
| `R15`  | `R15D` | `R15W` | `R15B`      |

Pointer and index registers:

| 64-Bit | 32-Bit | 16-Bit | 8-Bit (Low) |
|--------|--------|--------|-------------|
| `RSI`  | `ESI`  | `SI`   | `SIL`       |
| `RDI`  | `EDI`  | `DI`   | `DIL`       |
| `RBP`  | `EBP`  | `BP`   | `BPL`       |
| `RSP`  | `ESP`  | `SP`   | `SPL`       |

![Alt text](img/regis.png)

### Specialized Uses of General-Purpose Registers
- `RAX`: Return values and accumulator operations (64-bit version of EAX).
- `RCX`: Loop counter and 4th argument in Windows x64 calling convention.
- `RDX`: I/O operations and 3rd argument in Windows x64 calling convention.
- `RSP`: 64-bit stack pointer (critical for stack operations).
- `RSI/RDI`: String operations source/destination and function arguments.
- `RBP`: Frame pointer for accessing local variables and parameters.
- `R8-R15`: Additional general-purpose registers, often used for function arguments.

### Calling Conventions (Major Difference from x86)

#### Microsoft x64 Calling Convention (Windows)
- First **4 arguments** passed in registers: `RCX`, `RDX`, `R8`, `R9`
- Additional arguments passed on stack (right to left)
- **Shadow space**: Caller allocates 32 bytes on stack for called function
- Return value in `RAX`
- Volatile registers: `RAX`, `RCX`, `RDX`, `R8`, `R9`, `R10`, `R11`

#### System V AMD64 Calling Convention (Linux/Unix)
- First **6 arguments** passed in registers: `RDI`, `RSI`, `RDX`, `RCX`, `R8`, `R9`
- Additional arguments passed on stack (right to left)
- Return value in `RAX`
- Volatile registers: `RAX`, `RCX`, `RDX`, `RSI`, `RDI`, `R8`, `R9`, `R10`, `R11`

{{< alert icon="circle-info" cardColor="#e07935ff" iconColor="#1c70e6ff" textColor="#f1faee" >}}
**Critical Difference**: x86 passes ALL arguments on the stack, while x64 uses registers for the first few arguments.
This makes x64 function calls much faster but requires understanding different conventions per platform.
{{< /alert >}}

### Segment Registers
- Segmentation is largely disabled in 64-bit mode.
- `CS`, `SS` are still present but function differently.
- `FS` and `GS` are used for special purposes like Thread Local Storage (TLS).
- `DS`, `ES` are ignored in 64-bit mode.

### Instruction Pointer
- The `RIP register` contains the 64-bit address of the next instruction.
- Supports **RIP-relative addressing** - a new addressing mode unique to x64.
- Instructions can reference data relative to the current instruction pointer.

### RFLAGS Register
- 64-bit version of the EFLAGS register.
- Contains the same status and control flags as x86.
- Additional bits reserved for future use.

#### Status Flags (Same as x86)
- `CF (Carry flag)`: Set if unsigned arithmetic overflow occurs.
- `OF (Overflow flag)`: Set if signed arithmetic overflow occurs.
- `SF (Sign flag)`: Set if result is negative.
- `ZF (Zero flag)`: Set if result is zero.
- `AF (Auxiliary Carry)`: Set for BCD arithmetic operations.
- `PF (Parity flag)`: Set if result has even parity.

## Common Assembly Instructions

The fundamental instructions remain the same but operate on 64-bit operands:

`mov` — Move data between registers, memory, or immediate values.
```asm
mov rax, rbx        ; Move 64-bit value from rbx to rax
mov eax, ebx        ; Move 32-bit value (zeros upper 32 bits of rax)
mov ax, bx          ; Move 16-bit value
mov al, bl          ; Move 8-bit value
```

`add` — Addition operation.
```asm
add rax, rbx        ; 64-bit addition
add rax, 1000       ; Add immediate value
```

`sub` — Subtraction operation.
```asm
sub rsp, 40         ; Subtract from stack pointer (common for stack allocation)
```

`inc` / `dec` — Increment/decrement by 1.
```asm
inc rcx             ; Increment 64-bit register
dec r8              ; Decrement extended register
```

`lea` — Load Effective Address (very powerful in x64).
```asm
lea rax, [rdi + rsi*2 + 8]  ; Calculate address using complex addressing
```

`cmp` — Compare operands (sets flags for conditional jumps).
```asm
cmp rax, 0          ; Compare with zero
cmp r8, r9          ; Compare two registers
```

### REX Prefix
x64 instructions may require a **REX prefix** byte to:
- Access extended registers (R8-R15)
- Specify 64-bit operand size
- Access new 8-bit registers (SIL, DIL, BPL, SPL)

```asm
mov r8, rax         ; Requires REX prefix
mov sil, al         ; Requires REX prefix for SIL
```

## Addressing Modes

x64 supports all x86 addressing modes plus **RIP-relative addressing**:

### Register Addressing
```asm
mov rax, rbx        ; Source operand is in register rbx
```

### Immediate Addressing
```asm
mov rax, 0x12345678 ; 32-bit immediate (sign-extended to 64-bit)
```

### Memory Addressing
```asm
mov rax, [rbx]              ; Direct memory reference
mov rax, [rbx + 8]          ; Base + displacement
mov rax, [rbx + rcx*2]      ; Base + index*scale
mov rax, [rbx + rcx*2 + 8]  ; Base + index*scale + displacement
```

### RIP-Relative Addressing (New in x64)
```asm
mov rax, [rip + 0x1234]     ; Load from address relative to current instruction
lea rbx, [rip + data_label] ; Load address of label relative to RIP
```

{{< alert icon="circle-info" cardColor="#3093e4ff" iconColor="#1d3557" textColor="#f1faee" >}}
**RIP-relative addressing** is crucial for Position Independent Code (PIC).
It allows code to reference data without knowing absolute addresses, making ASLR (Address Space Layout Randomization) possible.
{{< /alert >}}

## The Stack (64-bit Behavior)

The stack operates the same way as x86 but with important differences:

- **Stack grows downward**: From high addresses to low addresses
- **LIFO behavior**: Last In, First Out
- **64-bit addresses**: All stack operations use 64-bit pointers
- **16-byte alignment**: Stack must be aligned to 16-byte boundaries before function calls

### Stack Instructions

`push` — Push 64-bit value onto stack (decrements RSP by 8).
```asm
push rax            ; Push 64-bit register
push qword [rbx]    ; Push 64-bit memory value
```

`pop` — Pop 64-bit value from stack (increments RSP by 8).
```asm
pop rax             ; Pop into 64-bit register
pop qword [rbx]     ; Pop into 64-bit memory location
```

### Stack Frame Setup (64-bit)
```asm
; Function prologue
push rbp            ; Save old frame pointer
mov rbp, rsp        ; Set new frame pointer
sub rsp, 32         ; Allocate space for local variables

; Function epilogue
mov rsp, rbp        ; Restore stack pointer
pop rbp             ; Restore old frame pointer
ret                 ; Return (pops return address into RIP)
```

{{< alert icon="circle-info" cardColor="#e07935ff" iconColor="#1c70e6ff" textColor="#f1faee" >}}
**Stack Alignment**: Before calling functions, RSP must be aligned to 16-byte boundary.
The `call` instruction pushes 8 bytes, so you often need to adjust RSP by additional 8 bytes.
{{< /alert >}}

## The Heap (64-bit Considerations)

- **Larger address space**: Can allocate much more memory than 32-bit systems
- **Same principles**: Dynamic allocation with malloc()/free() or new/delete
- **64-bit pointers**: All heap addresses are 64-bit values
- **Same vulnerabilities**: Buffer overflows, use-after-free, double-free still apply

```c
// 64-bit heap allocation
long long *big_array = malloc(1000000 * sizeof(long long)); // 8MB allocation
free(big_array);
```

## Conditional Jumps

Conditional jumps work identically to x86, but operate on 64-bit comparisons:

```asm
cmp rax, rbx        ; Compare 64-bit values
je equal_label      ; Jump if equal
jne not_equal       ; Jump if not equal
jg greater          ; Jump if rax > rbx (signed)
ja above            ; Jump if rax > rbx (unsigned)
```

All x86 conditional jump instructions are available with same mnemonics.

## Basic Examples

### Stack Frame (64-bit Version)

Let's examine the same C program compiled for 64-bit:

```c
#include <stdio.h>

int M = 5; // Global variable

int add_func(int var) {
    int L = 0; // Local variable
    L = M + var;
    return L;
}

int main() {
    printf("The result is %d\n", add_func(1));
    return 0;
}
```

Compile in 64-bit mode:
```bash
gcc -m64 stack_frame.c -o stack_frame_x64
```

Verify the format:
```bash
file stack_frame_x64
stack_frame_x64: ELF 64-bit LSB pie executable, x86-64...
```

**x64 Assembly Analysis:**

**Function Prologue:**
```asm
push rbp            ; Save old frame pointer (64-bit)
mov rbp, rsp        ; Set new frame pointer
sub rsp, 16         ; Allocate 16 bytes for locals (aligned)
```

**Accessing Global Variable M:**
```asm
mov eax, DWORD PTR M[rip]  ; RIP-relative addressing for global
```

**Accessing Function Parameter:**
- **Linux (System V)**: Parameter in `edi` register (first argument)
- **Windows**: Parameter in `ecx` register (first argument)
```asm
; Linux version
mov edx, edi        ; Parameter 'var' passed in EDI register
```

**Performing Addition:**
```asm
add eax, edx        ; Add M + var
mov DWORD PTR [rbp-4], eax  ; Store in local variable L
```

**Function Return:**
```asm
mov eax, DWORD PTR [rbp-4]  ; Move L into return register
leave               ; Equivalent to: mov rsp, rbp; pop rbp
ret                 ; Return to caller
```

### Key Differences from x86:
1. **Registers are 64-bit**: RBP, RSP instead of EBP, ESP
2. **Parameter passing**: Uses registers instead of stack for first few arguments
3. **RIP-relative addressing**: Global variables accessed relative to instruction pointer
4. **Stack alignment**: 16-byte alignment requirements
5. **Return address**: 8 bytes instead of 4 bytes

## Advanced x64 Features

### Position Independent Code (PIC)
RIP-relative addressing enables PIC, crucial for modern security:
```asm
lea rax, [rip + data_section]  ; Address calculated at runtime
mov rbx, [rip + global_var]    ; Access global data relatively
```

### Address Space Layout Randomization (ASLR)
- x64's large address space makes ASLR more effective
- Code, stack, and heap can be randomized across vast address ranges
- Makes exploitation significantly harder

### No-Execute (NX) Bit
- Hardware support for marking memory pages as non-executable
- Stack and heap are typically non-executable by default
- Prevents many code injection attacks

## Performance Improvements

### More Registers
- 16 general-purpose registers vs 8 in x86
- Reduces memory access and improves performance
- Better register allocation by compilers

### Improved Calling Conventions
- Register-based parameter passing is faster than stack-based
- Reduced memory traffic for function calls

### Larger Address Space
- No more 4GB memory limitations
- Applications can use system memory more effectively

### Bonus

{{< button href="https://www.swansontec.com/sregisters.html" target="_blank" >}}
📄 The Art of Picking Intel Registers
{{< /button >}}

<br>
<br>

{{< youtubeLite id="eP_P4KOjwhs">}}

<br>

{{< youtubeLite id="cjeo1H56uzM">}}

<br>

{{< youtubeLite id="LxvFb63OOs8">}}

