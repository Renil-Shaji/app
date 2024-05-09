import tkinter as tk
from tkinter import messagebox

def show_selected():
    selected_option = radio_var.get()
    label_result.config(text=f"Selected: {selected_option}")

def submit_action():
    user_input = entry.get()
    label_result.config(text=f"You entered: {user_input}")
    messagebox.showinfo("Submitted", "Your input has been submitted successfully!")

def next_load():
    for widget in frame.winfo_children():
        widget.destroy()
    new_page()


def back_load():
    for widget in frame.winfo_children():
        widget.destroy()
    main_page()
def new_page():
    button_nextpage = tk.Button(frame, text="backpage", command=back_load)
    button_nextpage.pack(pady=20)




def main_page():
    global entry,radio_var,label_result
    
    # Create Entry widget
    entry = tk.Entry(frame, width=30)
    entry.pack(pady=10)

    # Create Label widget inside the frame
    label = tk.Label(frame, text="Choose an option:")
    label.pack()

    # Create Radio button options
    radio_var = tk.StringVar(value="Option 1")  # Set initial value
    radio_option1 = tk.Radiobutton(frame, text="Option 1", variable=radio_var, value="Option 1", command=show_selected)
    radio_option1.pack(anchor=tk.W)
    radio_option2 = tk.Radiobutton(frame, text="Option 2", variable=radio_var, value="Option 2", command=show_selected)
    radio_option2.pack(anchor=tk.W)
    radio_option3 = tk.Radiobutton(frame, text="Option 3", variable=radio_var, value="Option 3", command=show_selected)
    radio_option3.pack(anchor=tk.W)

    # Create Label to display selected option
    label_result = tk.Label(frame, text="")
    label_result.pack(pady=10)

    # Create Button widget
    button_submit = tk.Button(frame, text="Submit", command=submit_action)
    button_submit.pack(pady=20)

    button_nextpage = tk.Button(frame, text="nextpage", command=next_load)
    button_nextpage.pack(pady=20)

# Create main tkinter window
root = tk.Tk()
root.title("Frame Example")
root.geometry("500x500")
root.resizable(0,0)
frame = tk.Frame(root, padx=20, pady=20)
frame.pack(padx=50, pady=50)

main_page()
# Create a frame

# Run the main event loop
root.mainloop()
