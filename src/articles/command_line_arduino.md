# Command-Line Arduino

## Prerequisites

Install Arduino tools:

```bash
sudo apt install --reinstall arduino
```

Make sure your user id is in the “dialout” group.

## Installation

The easiest way to install the Arduino command line utility is to download the latest release package from [here](https://github.com/arduino/arduino-cli/releases), and just extract it into a directory in your path. It’s a single executable (built with [Go](https://golang.org/)), so it won’t clutter things up.

## Getting Started

I used [this](https://arduino.github.io/arduino-cli/getting-started/) as a reference. It has a lot more detail.

### Configuration File

Before you run for the first time, create a configuration file:

```bash
arduino-cli config init
```

### Create Sketch / Add Some Code

Create a new sketch:

```bash
arduino-cli sketch new MyFirstSketch
```

A boilerplate sketch file is generated for you:

MyFirstSketch.ino
```c
void setup() {
}
    
void loop() {
}
```

Edit the generated file, and fill in some details:

```c
void setup() {
    pinMode(LED_BUILTIN, OUTPUT);
}
    
void loop() {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(1000);
    digitalWrite(LED_BUILTIN, LOW);
    delay(1000);
}
```

### Connect a Board

Update local cache of available platforms:

```bash
arduino-cli core update-index
```

After connecting your board, check to see if it’s recognized:

```bash
arduino-cli board list
```

Result should look something like this (I’m using an Uno):

```txt
Port         Type              Board Name  FQBN            Core       
/dev/ttyACM0 Serial Port (USB) Arduino Uno arduino:avr:uno arduino:avr
```

Install the core for your board (refer to the first two segments of the FQBN):

```bash
arduino-cli core install arduino:avr
```

### Compile and Upload the Sketch

Compile:

```bash
arduino-cli compile --fqbn arduino:avr:uno MyFirstSketch
```

Upload:

```bash
arduino-cli upload -p /dev/ttyACM0 --fqbn arduino:avr:uno MyFirstSketch
```

## Makefile

This Makefile simplifies the compile and upload steps, and adds format, reset, and clean commands:

Makefile

```makefile
ARDCMD=arduino-cli
FQBNSTR=arduino:avr:uno
PORT=/dev/ttyACM0
SKETCHNAME=MyFirstSketch
FORMATTER=clang-format -i
    
default:
    @echo 'Targets:'
    @echo '  compile  -- Compile sketch, but don''t upload it.'
    @echo '  upload   -- Compile and upload sketch.'
    @echo '  format   -- Beautify your sketch code.'
    @echo '  reset    -- Use to resolve Device Busy error.'
    @echo '  clean    -- Remove binaries and object files.'
    
compile:
    $(ARDCMD) compile --fqbn $(FQBNSTR) $(SKETCHNAME)
    
upload: compile
    $(ARDCMD) upload -p $(PORT) --fqbn $(FQBNSTR) $(SKETCHNAME)
    
format:
    $(FORMATTER) $(SKETCHNAME)/$(SKETCHNAME).ino
    
reset:
    fuser -k $(PORT)
    
clean:
    -rm -f $(SKETCHNAME)/*.hex
    -rm -f $(SKETCHNAME)/*.elf
```
