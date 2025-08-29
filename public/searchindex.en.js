var relearn_searchindex = [
  {
    "breadcrumb": "HOME \u003e Guides \u003e Reverse Engineering \u003e x86 Course",
    "content": "A computer application is a sequence of machine instructions stored in memory. The binary numbers that make up the program are meaningful only in how the CPU interprets and executes them.\nBasic System Components The fundamental architecture consists of:\nCPU Memory Input/output devices System bus connecting all components CPU Structure The CPU is composed of four main parts:\nControl Unit\nRetrieves and decodes instructions from memory Manages data transfers between CPU and memory Execution Unit\nCarries out the actual instruction operations Registers\nSmall, fast storage locations inside the CPU for temporary data Flags\nStatus indicators that reflect the outcome of operations Instruction Fetch and Execution (IA-32) On a 32-bit x86 CPU:\nThe control unit fetches a double word (4 bytes) from a specific memory address. The fetched bits form a machine instruction that the execution unit performs. Upon completion, the instruction pointer (EIP) register is updated to point to the next instruction. Manipulating Program Flow By altering the value in EIP, it’s possible to redirect execution to unexpected code paths. This technique underlies many malware exploits.\nSystem Clock Synchronization The entire fetch-execute cycle runs in sync with the system clock, an oscillator that emits square-wave pulses at precise intervals.\nIn the next tutorial, we will explore the IA-32 architecture’s general-purpose registers.",
    "description": "A computer application is a sequence of machine instructions stored in memory. The binary numbers that make up the program are meaningful only in how the CPU interprets and executes them.\nBasic System Components The fundamental architecture consists of:\nCPU Memory Input/output devices System bus connecting all components CPU Structure The CPU is composed of four main parts:\nControl Unit\nRetrieves and decodes instructions from memory Manages data transfers between CPU and memory Execution Unit",
    "tags": [],
    "title": "Architecture",
    "uri": "/guides/reverse-engineering/x86-course/arch/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides \u003e Reverse Engineering \u003e x86 Course",
    "content": "A bit is the fundamental unit in computing, represented by an electrical state: on (1) or off (0). The binary number system uses base 2, meaning each digit’s place value is twice the value of the position to its right. Only two digits exist in binary: 0 and 1. In contrast, the decimal system is base 10, using digits 0–9; for example, decimal 15 = (1 × 10) + (5 × 1). The same value in binary is 1111 (1 × 2³ + 1 × 2² + 1 × 2¹ + 1 × 2⁰ = 15). Binary simplifies computer and hardware design by matching the on/off nature of electronic circuits to its two-digit system. Eight bits make one byte. Four bits form a nibble, which covers values 0–15. Hexadecimal is base 16. Each digit’s place value is 16× the value of the position to its right. Hex uses 16 symbols: 0–9 for values zero through nine, and A–F for values ten through fifteen. Converting between bases uses the general formula: where b is the base (2 for binary, 10 for decimal, 16 for hex).",
    "description": "A bit is the fundamental unit in computing, represented by an electrical state: on (1) or off (0). The binary number system uses base 2, meaning each digit’s place value is twice the value of the position to its right. Only two digits exist in binary: 0 and 1. In contrast, the decimal system is base 10, using digits 0–9; for example, decimal 15 = (1 × 10) + (5 × 1).",
    "tags": [],
    "title": "Number System",
    "uri": "/guides/reverse-engineering/x86-course/number-system/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides \u003e Reverse Engineering",
    "content": "x86 Assembly Language x86 Assembly is a family of backward-compatible languages dating back to the Intel 8000 series of microprocessors. It uses mnemonics to represent CPU instructions and produces object code for x86 processors. Syntax Variants Two main syntaxes exist: AT\u0026T (source before destination) and Intel (destination before source). Intel syntax is dominant when disassembling or debugging both Windows PE and Linux ELF binaries. info A PE (Portable Executable) file is a file format used by Windows for executables (.exe), dynamic libraries (.dll) and system drivers (.sys), which contains information needed by the operating system to load and execute the code.\nAn ELF (Executable and Linkable Format) file is a standard file format for executable files, object code, shared libraries, and core dumps on Unix-like operating systems like Linux.\nEnvironment and Platform Focus Tutorials will concentrate on Linux Assembly using Intel syntax , paired with C source code for disassembly practice. Architecture Emphasis The course emphasizes 32-bit architecture, since 32-bit programs run on both 32-bit and 64-bit systems, making them common targets. x32 == x86 ? The terms x86 and x32 are often confused, but x86 is a family of instruction set architectures from Intel and AMD that includes both 16-bit and 32-bit (and even 64-bit \u003e x86_64) processors, while x32 is not a standard term; 32-bit systems are correctly referred to as “x86” or “IA-32”. The term “x86” comes from the Intel 8086 processor, and its successors like the 80186, 80286, 80386, and 80486, all of which ended in “86”.",
    "description": "x86 Assembly Language x86 Assembly is a family of backward-compatible languages dating back to the Intel 8000 series of microprocessors. It uses mnemonics to represent CPU instructions and produces object code for x86 processors. Syntax Variants Two main syntaxes exist: AT\u0026T (source before destination) and Intel (destination before source). Intel syntax is dominant when disassembling or debugging both Windows PE and Linux ELF binaries. info A PE (Portable Executable) file is a file format used by Windows for executables (.",
    "tags": [],
    "title": "x86 Course",
    "uri": "/guides/reverse-engineering/x86-course/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides",
    "content": "Intro",
    "description": "Intro",
    "tags": [],
    "title": "Cryptography",
    "uri": "/guides/cryptography/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides",
    "content": "Intro",
    "description": "Intro",
    "tags": [],
    "title": "Forensics",
    "uri": "/guides/forensics/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides \u003e Cryptography",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Intro",
    "uri": "/guides/cryptography/into/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides \u003e Forensics",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Intro",
    "uri": "/guides/forensics/into/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides",
    "content": "Introduction Reverse engineering isn’t just about reading assembly instructions, loading your program and hunting for strings . It’s a detective story in which you trace data flows, identify encryption routines, and uncover logic flaws that reveal the program’s objective . Mastering this craft equips you to find vulnerabilities in real-world software and malware.\nx86 Course Techniques",
    "description": "Introduction Reverse engineering isn’t just about reading assembly instructions, loading your program and hunting for strings . It’s a detective story in which you trace data flows, identify encryption routines, and uncover logic flaws that reveal the program’s objective . Mastering this craft equips you to find vulnerabilities in real-world software and malware.\nx86 Course Techniques",
    "tags": [],
    "title": "Reverse Engineering",
    "uri": "/guides/reverse-engineering/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides \u003e Reverse Engineering",
    "content": "There are two basic techniques that you can employ when analyzing programs. The first being static analysis and the other being dynamic analysis.\nStatic analysis : examines a program’s executable without running it, using decompilers and disassemblers to reveal its code structure, control flow, and embedded data. Dynamic analysis : executes the program in a controlled environment, leveraging debuggers and instrumentation tools to observe its runtime behavior, memory usage, and logic paths.",
    "description": "There are two basic techniques that you can employ when analyzing programs. The first being static analysis and the other being dynamic analysis.\nStatic analysis : examines a program’s executable without running it, using decompilers and disassemblers to reveal its code structure, control flow, and embedded data. Dynamic analysis : executes the program in a controlled environment, leveraging debuggers and instrumentation tools to observe its runtime behavior, memory usage, and logic paths.",
    "tags": [],
    "title": "Techniques",
    "uri": "/guides/reverse-engineering/techniques/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides",
    "content": "Intro",
    "description": "Intro",
    "tags": [],
    "title": "Binary Exploitation",
    "uri": "/guides/binary-exploitation/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Guides \u003e Binary Exploitation",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Intro",
    "uri": "/guides/binary-exploitation/intro/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Windows",
    "content": "",
    "description": "",
    "tags": [],
    "title": "runas",
    "uri": "/cheatsheets/windows/runas/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Linux",
    "content": "",
    "description": "",
    "tags": [],
    "title": "apt",
    "uri": "/cheatsheets/linux/apt/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets",
    "content": "runas",
    "description": "runas",
    "tags": [],
    "title": "Windows",
    "uri": "/cheatsheets/windows/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets",
    "content": "apt",
    "description": "apt",
    "tags": [],
    "title": "Linux",
    "uri": "/cheatsheets/linux/index.html"
  },
  {
    "breadcrumb": "HOME",
    "content": "Cryptography Forensics Reverse Engineering Binary Exploitation",
    "description": "Cryptography Forensics Reverse Engineering Binary Exploitation",
    "tags": [],
    "title": "Guides",
    "uri": "/guides/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Troubleshooting",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Kali Issues",
    "uri": "/troubleshooting/kali-issues/index.html"
  },
  {
    "breadcrumb": "HOME",
    "content": "Kali Issues",
    "description": "Kali Issues",
    "tags": [],
    "title": "Troubleshooting",
    "uri": "/troubleshooting/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Services \u0026 Protocols",
    "content": "",
    "description": "",
    "tags": [],
    "title": "SSH",
    "uri": "/services-protocols/ssh/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Services \u0026 Protocols",
    "content": "",
    "description": "",
    "tags": [],
    "title": "HTTP",
    "uri": "/services-protocols/http/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Services \u0026 Protocols",
    "content": "",
    "description": "",
    "tags": [],
    "title": "FTP",
    "uri": "/services-protocols/ftp/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Services \u0026 Protocols",
    "content": "",
    "description": "",
    "tags": [],
    "title": "DNS",
    "uri": "/services-protocols/dns/index.html"
  },
  {
    "breadcrumb": "HOME",
    "content": "SSH HTTP FTP DNS",
    "description": "SSH HTTP FTP DNS",
    "tags": [],
    "title": "Services \u0026 Protocols",
    "uri": "/services-protocols/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets",
    "content": "MySQL Markdown Bash Python C++",
    "description": "MySQL Markdown Bash Python C++",
    "tags": [],
    "title": "Programming",
    "uri": "/cheatsheets/programming/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Programming",
    "content": "",
    "description": "",
    "tags": [],
    "title": "MySQL",
    "uri": "/cheatsheets/programming/mysql/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Programming",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Markdown",
    "uri": "/cheatsheets/programming/markdown/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Programming",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Bash",
    "uri": "/cheatsheets/programming/bash/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Programming",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Python",
    "uri": "/cheatsheets/programming/python/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Programming",
    "content": "",
    "description": "",
    "tags": [],
    "title": "C++",
    "uri": "/cheatsheets/programming/c\u0026#43;\u0026#43;/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Tools",
    "content": "About Tool for searching a given binary image for embedded files and executable code. Specifically, it is designed for identifying files and code embedded inside of firmware images.\nInstallation sudo apt install python3-binwalk Usage binwalk [OPTIONS] [FILE] Examples Extract data binwalk --extract --dd=\".\" Tux.jpg Tip Use the --include and --exclude arguments to include or exclude specific signatures by name:\nbinwalk --exclude=jpeg,png,gif /tmp/firmware.bin The signature names are displayed under the Signature Name column of the signature list.",
    "description": "About Tool for searching a given binary image for embedded files and executable code. Specifically, it is designed for identifying files and code embedded inside of firmware images.\nInstallation sudo apt install python3-binwalk Usage binwalk [OPTIONS] [FILE] Examples Extract data binwalk --extract --dd=\".\" Tux.jpg Tip Use the --include and --exclude arguments to include or exclude specific signatures by name:\nbinwalk --exclude=jpeg,png,gif /tmp/firmware.bin The signature names are displayed under the Signature Name column of the signature list.",
    "tags": [],
    "title": "Binwalk",
    "uri": "/cheatsheets/tools/binwalk/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets",
    "content": "Binwalk Steghide",
    "description": "Binwalk Steghide",
    "tags": [],
    "title": "Tools",
    "uri": "/cheatsheets/tools/index.html"
  },
  {
    "breadcrumb": "HOME",
    "content": "Windows Linux Programming Tools",
    "description": "Windows Linux Programming Tools",
    "tags": [],
    "title": "Cheatsheets",
    "uri": "/cheatsheets/index.html"
  },
  {
    "breadcrumb": "HOME \u003e Cheatsheets \u003e Tools",
    "content": "About A steganography program that helps in hiding data in various kind of formats of images, audio files.\nInstallation sudo apt install steghide Usage steghide [OPTIONS] Examples Get info steghide info \u003csteg-image-name\u003e Hide data steghide embed -ef \u003csecret-file-name\u003e -cf \u003ctarget-image-name\u003e Extract data steghide extract -sf \u003csteg-image-name\u003e -xf \u003ctarget-file-name\u003e",
    "description": "About A steganography program that helps in hiding data in various kind of formats of images, audio files.\nInstallation sudo apt install steghide Usage steghide [OPTIONS] Examples Get info steghide info \u003csteg-image-name\u003e Hide data steghide embed -ef \u003csecret-file-name\u003e -cf \u003ctarget-image-name\u003e Extract data steghide extract -sf \u003csteg-image-name\u003e -xf \u003ctarget-file-name\u003e",
    "tags": [],
    "title": "Steghide",
    "uri": "/cheatsheets/tools/steghide/index.html"
  },
  {
    "breadcrumb": "",
    "content": "👋 Welcome! This is the starting point.\nHere you’ll find guides, documentation, and references on different topics.\nGuides Troubleshooting Services \u0026 Protocols Cheatsheets A Huge by HoXoN.",
    "description": "👋 Welcome! This is the starting point.\nHere you’ll find guides, documentation, and references on different topics.\nGuides Troubleshooting Services \u0026 Protocols Cheatsheets A Huge by HoXoN.",
    "tags": [],
    "title": "HOME",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "HOME",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "HOME \u003e ",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Credits",
    "uri": "/more/credits_index/index.html"
  },
  {
    "breadcrumb": "HOME",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
