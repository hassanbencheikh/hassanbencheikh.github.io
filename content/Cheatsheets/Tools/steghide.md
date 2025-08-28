+++
title = 'Steghide'
date = 2025-08-27T10:41:48-04:00
draft = true
[params]
  menuPre = '<i class="fa-solid fa-wrench"></i> '
+++

{{% notice style="primary" title="About" style="info" %}}
A steganography program that helps in hiding data in various kind of formats of images, audio files.
{{% /notice %}}

## Installation

```bash
sudo apt install steghide
```

## Usage

```bash
steghide [OPTIONS]
```

## Examples

### Get info

```bash
steghide info <steg-image-name>
```

### Hide data

```bash
steghide embed -ef <secret-file-name> -cf <target-image-name>
```

### Extract data

```bash
steghide extract -sf <steg-image-name> -xf <target-file-name>
```
