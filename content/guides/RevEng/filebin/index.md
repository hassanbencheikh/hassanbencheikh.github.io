+++
date = '2025-09-03T16:46:21+01:00'
draft = false
title = '4. File Formats & Binary Structure'

summary = "Overview of PE, ELF, and Mach-O structures with emphasis on headers, metadata, and resource analysis."
weight = 50
+++

## Binary File Formats

#### Executable file formats

Executable file formats are `specialized` file types that contain instructions a computer can **directly run**. These files are the `final product` of **compiling and linking source code**, and they’re loaded into memory by the operating system’s loader to **launch** applications or **perform** tasks.

| Format    | OS/Platform         | Extension(s)   | About                                                       |
|-----------|---------------------|----------------|-------------------------------------------------------------|
| PE        | Windows              | `.exe`, `.dll` | Portable Executable; includes headers and sections for code/data |
| ELF       | Linux, Unix-like     | `.elf`, none    | Executable and Linkable Format; modular and flexible        |
| Mach-O    | macOS, iOS           | none            | Used in Apple systems; supports fat binaries for multiple architectures |
| MZ        | DOS                  | `.exe`          | Legacy format; often a stub for newer formats               |
| COM       | DOS, Windows         | `.com`          | Very simple, flat memory model                              |
| BIN       | Unix, embedded systems | `.bin`       | Raw binary; often firmware or low-level code                |



+ Understanding file formats matters for `reverse engineering`
+ Operating system dependency : Different OS -- different formats
+ Static vs Dynamic analysis `preparation`


{{< alert icon="search" cardColor="#f08d3cff" iconColor="#254675ff" textColor="#f1faee" >}}
In this part, I give you the `freedom` to choose what you need and look it up on Google. If you don’t understand something from the videos, keep searching and exploring—don’t give up! 😄❤️
{{< /alert >}}

## Portable Executable - Windows




{{< youtubeLite id="OkX2lIf9YEM">}}
<br>

+ [A dive into the PE format](https://0xrick.github.io/win-internals/pe2/) `<< Link`

### PE Tools and Analysis

+ **PE viewers** - PEview, CFF Explorer, PE-bear
+ **Command line tools** - dumpbin, objdump

## Executable and Linkable Format - Linux

{{< youtubeLite id="nC1U1LJQL8o">}}

+ [A dive into the ELF format](https://linux-audit.com/elf-binaries-on-linux-understanding-and-analysis/) `<< Link`

### ELF Tools and Analysis

+ **readelf** - comprehensive ELF analyzer
+ **objdump** - disassembly and headers
+ **hexdump** - raw binary viewing
+ **file** `command` - quick format identification

## Mach-O - Apple

{{< youtubeLite id="-nPXpfiqmiw">}}

+ [A dive into the Mach-O format](https://oliviagallucci.com/the-anatomy-of-a-mach-o-structure-code-signing-and-pac/) `<< Link`

### Mach-O Tools and Analysis

+ **otool** - object file displaying tool
+ **nm** - symbol table viewer
+ **lipo** - universal binary manipulation
+ **class-dump** - Objective-C class information