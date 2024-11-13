# TAMUI

This project utilizes [Tamui](https://www.npmjs.com/package/tamui) to provide a modern and responsive user interface.

### TamUI Installation Documentation

**TamUI** You can follow the installation steps below to speed up your projects and create compatible components. After installing TamUI, you can easily access the UI components and use them in your project.

#### Step 1: Install the TamUI Plugin
First, run the following command in your terminal to add the TamUI package to your project:
```bash
npm i tamui
```

### Step 2: Update the Tailwind Config File
To integrate TamUI into your Tailwind CSS project, add the following require command to your tailwind.config.js file:
```bash
module.exports = {
  plugins: [
    require("tamui/tamui"),
  ],
}
```
