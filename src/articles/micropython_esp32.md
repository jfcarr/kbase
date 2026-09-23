# MicroPython on ESP32

## Download Firmware

<https://micropython.org/download/>

<https://micropython.org/download/?port=esp32>

ESP32 / WROOM: <https://micropython.org/download/ESP32_GENERIC/>

Download latest release .bin, e.g.: **ESP32_GENERIC-20230426-v1.20.0.bin**

## Virtual Environment

```bash
python3 -m venv esp_venv
 
cd esp_venv
 
source bin/activate
 
pip install esptool
```

## Installation

Plug in the esp32 board.

Check /dev and confirm device is devttyUSB0. If not, adjust instructions accordingly.

If you are putting MicroPython on your board for the first time then you should first erase the entire flash using:

```bash
esptool.py --chip esp32 --port /dev/ttyUSB0 erase_flash
```

From then on program the firmware starting at address 0x1000:

```bash
esptool.py --chip esp32 --port /dev/ttyUSB0 --baud 460800 write_flash -z 0x1000 esp32-20190125-v1.10.bin
```

### Port Error

If you see this when running esptool.py:

```txt
A fatal error occurred: Could not open /dev/ttyUSB0, the port doesn't exist
```

You may need to add yourself to the dialout group:

```bash
sudo adduser <username> dialout
```

And maybe also this:

```bash
sudo chmod a+rw /dev/ttyUSB0
```

## Access REPL

Install picocom:

```bash
sudo apt install picocom
```

Connect:

```bash
picocom /dev/ttyUSB0 -b115200
```

Hit enter a couple of times, and you’ll see the »> prompt.

Test:

```txt
>>> import machine
>>> pin = machine.Pin(2, machine.Pin.OUT)
>>> pin.on()
>>> pin.off()
```
