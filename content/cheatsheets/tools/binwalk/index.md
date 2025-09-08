+++
date = '2025-09-02T14:50:20+01:00'
draft = false
title = 'Binwalk'

summary = "extract embedded files and executable"
+++


Tool for searching a given binary image for `embedded files` and `executable code`. Specifically, it is designed for identifying files and code embedded inside of firmware images.


### Installation

```bash
sudo apt install python3-binwalk
```

### Usage

```bash
binwalk [OPTIONS] [FILE]
```

### Examples

+ **Extract data**

```bash
binwalk --extract --dd="." Tux.jpg
```


+ Use the `--include` and `--exclude` arguments to include or exclude specific signatures by name:

```bash
binwalk --exclude=jpeg,png,gif /tmp/firmware.bin
```

The signature names are displayed under the `Signature Name` column of the [signature list](https://github.com/ReFirmLabs/binwalk/wiki/Supported-Signatures).