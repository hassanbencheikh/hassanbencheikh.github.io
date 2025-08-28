+++
title = 'Binwalk'
date = 2025-08-27T14:22:24-04:00
draft = true
[params]
  menuPre = '<i class="fa-solid fa-wrench"></i> '
+++


{{% notice style="primary" title="About" style="info" %}}
Tool for searching a given binary image for embedded files and executable code. Specifically, it is designed for identifying files and code embedded inside of firmware images.
{{% /notice %}}

## Installation

```bash
sudo apt install python3-binwalk
```

## Usage

```bash
binwalk [OPTIONS] [FILE]
```

## Examples

### Extract data

```bash
binwalk --extract --dd="." Tux.jpg
```

{{% notice style="tip" title="Tip" style="tip" %}}

Use the `--include` and `--exclude` arguments to include or exclude specific signatures by name:

```bash
binwalk --exclude=jpeg,png,gif /tmp/firmware.bin
```

The signature names are displayed under the `Signature Name` column of the [signature list](https://github.com/ReFirmLabs/binwalk/wiki/Supported-Signatures).

{{% /notice %}}
