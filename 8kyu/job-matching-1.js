function match(candidate, job) {
  if (job.maxSalary && candidate.minSalary) {
    return job.maxSalary >= candidate.minSalary * 0.9;
  } else throw "error";
}
