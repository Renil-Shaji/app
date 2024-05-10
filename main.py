import tkinter as tk
from tkinter import messagebox

user_cred={}

def login_check():
    user=user_entry.get()
    pwd=pwd_entry.get()

    try:
        if(user_cred[user]==pwd):
            messagebox.showinfo("Successfull","Login Successfull")
        else:
            messagebox.showerror("Error","Incorrect Password")
    except:
        messagebox.showerror("Error","Incorrect Username")

def new_reg():
    user=reg_user_entry.get()
    pwd=reg_pwd_entry.get()

    if(user!="" and pwd!=""):
        user_cred[user]=pwd
        messagebox.showinfo("Successfull","Register Successfull")
    else:   
        messagebox.showerror("Error","Invalid Input")

def clear():
    try:
        for widget in frame.winfo_children():
            widget.destroy()
        return
    except:
        return


def register_page():
    global reg_user_entry,reg_pwd_entry

    clear()
    reg_user_label=tk.Label(frame,text="Username")
    reg_user_label.grid(row=1,column=2,pady=10,padx=10)

    reg_user_entry=tk.Entry(frame)
    reg_user_entry.grid(row=1,column=4,pady=10,padx=10)

    reg_pwd_label=tk.Label(frame,text="Password",)
    reg_pwd_label.grid(row=2,column=2,pady=10,padx=10)

    reg_pwd_entry=tk.Entry(frame,show="*")
    reg_pwd_entry.grid(row=2,column=4,pady=10,padx=10)

    login_but=tk.Button(frame,text="Register",command=new_reg)
    login_but.grid(row=4,column=3,pady=10,padx=10)

    register_but=tk.Button(frame,text="Login",command=login_page)
    register_but.grid(row=5,column=3,pady=10,padx=10)

def login_page():
    clear()
    global user_entry,pwd_entry
    user_label=tk.Label(frame,text="Username")
    user_label.grid(row=1,column=2,pady=10,padx=10)

    user_entry=tk.Entry(frame)
    user_entry.grid(row=1,column=4,pady=10,padx=10)

    pwd_label=tk.Label(frame,text="Password",)
    pwd_label.grid(row=2,column=2,pady=10,padx=10)

    pwd_entry=tk.Entry(frame,show="*")
    pwd_entry.grid(row=2,column=4,pady=10,padx=10)

    login_but=tk.Button(frame,text="Login",command=login_check)
    login_but.grid(row=4,column=3,pady=10,padx=10)

    register_but=tk.Button(frame,text="Register",command=register_page)
    register_but.grid(row=5,column=3,pady=10,padx=10)






root=tk.Tk()
root.title("Checking")
root.geometry("500x500")
root.resizable(0,0)

frame=tk.LabelFrame(root,height=400,width=400)
frame.place(x=50,y=50)

login_page()

root.mainloop()