module.exports = {
  requires: {
    bundle: "ai"
  },
  run: [
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          triton: true,
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "uv pip install -r app/requirements.txt"
        ],
      }
    },
    {
      method: "notify",
      params: {
        html: "Installation complete! Click 'Start' to launch LFM3-VL-2B (Gradio). The model downloads from Hugging Face on first run."
      }
    }
  ]
}
