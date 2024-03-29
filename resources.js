function playMedia(filename) {
  const extension = filename.split(".").pop().toLowerCase();

  if (extension === "mp3" || extension === "wav") {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = filename;
    audioPlayer.style.display = "block";
    audioPlayer.play();
    document.getElementById("videoPlayer").pause();
    document.getElementById("videoPlayer").style.display = "none";
  } else if (extension === "mp4" || extension === "webm") {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = filename;
    videoPlayer.style.display = "block";
    videoPlayer.play();
    document.getElementById("audioPlayer").pause();
    document.getElementById("audioPlayer").style.display = "none";
  } else {
    alert("Unsupported file format");
  }
}
