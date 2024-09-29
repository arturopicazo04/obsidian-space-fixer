class SpaceFixer extends require('obsidian').Plugin {

  onload() {
    console.log("Plugin Space Fixer activated");

    // Register the event for changes in the active editor
    this.registerEvent(
      this.app.workspace.on('editor-change', (editor) => {
        if (editor) {
          // Get the current content of the editor
          let content = editor.getValue();
          
          // Replace two consecutive spaces with a single space
          const fixedContent = content.replace(/ {2,}/g, " ");
          
          // Only update the content if a change has been detected
          if (fixedContent !== content) {
            // Save the cursor position before making changes
            const cursor = editor.getCursor();

            // Update the content without double spaces
            editor.setValue(fixedContent);

            // Reposition the cursor in the correct place
            editor.setCursor(cursor);
          }
        }
      })
    );
  }

  onunload() {
    console.log("Plugin Space Fixer deactivated");
  }
}

module.exports = SpaceFixer;
