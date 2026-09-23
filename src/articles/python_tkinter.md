# Python Tkinter Examples

```python
#!/usr/bin/python
 
from Tkinter import Tk
from Tkinter import *
from tkMessageBox import *
 
def TakePicture():
	print "Take Picture!"
 
def GetInfo():
	print "Get info..."
 
def About():
	showinfo('About', 'This is a simple example of a menu')
 
root = Tk()
root.wm_title("Grid Test")
 
menu = Menu(root)
root.config(menu=menu)
 
filemenu = Menu(menu)
menu.add_cascade(label="File", menu=filemenu)
filemenu.add_command(label="Exit", command=root.destroy)
 
toolmenu = Menu(menu)
menu.add_cascade(label="Tools", menu=toolmenu)
toolmenu.add_command(label="Take Picture", command=TakePicture)
 
helpmenu = Menu(menu)
menu.add_cascade(label="Help", menu=helpmenu)
helpmenu.add_command(label="About...", command=About)
 
btnInfo = Button(root, text='Info', width=20, command=GetInfo)
btnInfo.grid(row=1,column=0,padx=5,pady=5)
 
btnQuit = Button(root, text='Quit', width=20, command=root.destroy)
btnQuit.grid(row=1,column=1,padx=5,pady=5)
 
statusLabel = Label(root, text="Ready")
statusLabel.grid(row=2,column=0)
 
mainloop()
```
