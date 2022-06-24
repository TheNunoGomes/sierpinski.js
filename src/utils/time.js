function delay(time) {
  if (!time) return;
  return new Promise((resolve) => setTimeout(resolve, time));
}
