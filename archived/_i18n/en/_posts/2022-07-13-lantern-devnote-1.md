---
post_group: lantern
title: Lantern Dev Note 1 - Setting up VS Code + Raspberry Pi 3 B+ remote development, flashing the "Hello, world!" LED
published: true
tags: lantern python robots raspberry-pi
---

This is part 3 of a series of my [Lantern robot project](/post-group/lantern).  
In the "Lantern Dev Note" series of posts, I will be walking through the process I take to develop the robot.  
Since I'm not so experienced with robot projects, I will start small, and develop incrementally one at a time.
I'm using a Windows 10 PC and a Raspberry Pi 3 B+ for development.

### 1. Installing Raspberry Pi OS using the imager
I'm going to be using [**Raspberry Pi Imager**](https://www.raspberrypi.com/software/) to install the operating system for the RPi, as it is the most simplest method of getting the OS up and running.  

<img src="/assets/images/lantern_devnote_installing_rpi_os_1.png" alt="Download Raspberry Pi Imager from 'https://www.raspberrypi.com/software/'"/>

Choose "Raspberry Pi OS Lite (32-bit)"

<img src="/assets/images/lantern_devnote_installing_rpi_os_2.png" alt="Download Raspberry Pi Imager from 'https://www.raspberrypi.com/software/'"/>

Choose the following options in "Advanced options". This will allow you to SSH into the RPi using "raspberrypi.local" resolved through [mDNS](https://www.raspberrypi.com/documentation/computers/remote-access.html#resolving-raspberrypi-local-with-mdns)

<img src="/assets/images/lantern_devnote_installing_rpi_os_3.png" alt="Download Raspberry Pi Imager from 'https://www.raspberrypi.com/software/'"/>

SSH into the RPi
{% highlight bash %}
ssh pi@raspberrypi.local
{% endhighlight %}

Update packages 
{% highlight bash %}
pi@raspberrypi:~ $ sudo apt update -y && sudo apt upgrade -y
{% endhighlight %}

### 2. Set up remote development on VS Code
Follow the steps from the [VS Code documentation](https://code.visualstudio.com/docs/remote/ssh-tutorial) to set up remote development.

### 3. Enable python virtual environment 
I had to [install pip](https://www.raspberrypi.com/documentation/computers/os.html#pip) since Bullseye Lite didn't seem to have it. 
{% highlight bash %}
# Install pip
pi@raspberrypi:~ $ sudo apt install python3-pip -y

# Install virtualenv
pi@raspberrypi:~ $ python -m pip install virtualenv

# Create virtual environment
pi@raspberrypi:~ $ mkdir lantern && cd lantern
pi@raspberrypi:~/lantern $ python -m virtualenv .venv

# Activate the environment
pi@raspberrypi:~/lantern & . .venv/bin/activate

(.venv) pi@raspberrypi:~/lantern $ 
{% endhighlight %}

### 4. Flash the onboard LED

The PWR LED on the RPi 3 B+ (And also probably for 4) is the red one which lights up when the RPi is powered.

You can write to a sysfs entry ```/sys/class/leds/led1/trigger``` to temporary change the LED behavior.
You can ```cat``` out the contents of the entry to see which options you have available.

{% highlight bash %}
(.venv) pi@raspberrypi:~/lantern $ cat /sys/class/leds/led1/trigger
none rc-feedback kbd-scrolllock kbd-numlock kbd-capslock kbd-kanalock kbd-shiftlock kbd-altgrlock kbd-ctrllock kbd-altlock kbd-shiftllock kbd-shiftrlock kbd-ctrlllock kbd-ctrlrlock timer oneshot heartbeat backlight gpio cpu cpu0 cpu1 cpu2 cpu3 [default-on] input panic actpwr mmc1 mmc0 rfkill-any rfkill-none rfkill0 rfkill1
(.venv) pi@raspberrypi:~/lantern $ 
{% endhighlight %}

This is a very simple python function I wrote to flash the onboard PWR LED for 5 seconds. 

[View this on GitHub](https://github.com/massivebugs/lantern-robot/blob/32efb091b1569b6e598e5b47fcd9286f2b84ef04/main.py#L1-L17)  


{% highlight python %}
import os
import subprocess
import time

def heartbeat(seconds: int = 5) -> None:
    """ Flashes the onboard PWR LED for a few seconds """

    if (os.geteuid() != 0):
        print('You need root permission to run heartbeat()!') 
        return

    subprocess.check_output("echo heartbeat | tee /sys/class/leds/led1/trigger > /dev/null", shell=True)
    time.sleep(seconds)
    subprocess.run("echo default-on | tee /sys/class/leds/led1/trigger > /dev/null", shell=True)

if __name__ == "__main__":
    heartbeat()
{% endhighlight %}

Heartbeating the LED is so simple and because of it's name I think it is really suited for being the first code to be run on a robot.

<video src="/assets/videos/lantern_devnote_flashing_led.mp4" style="max-width: 600px" controls loop muted></video>