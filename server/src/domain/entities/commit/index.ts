export class Commit {
    sha: string;
    html_url: string;
    commit: {
      committer: {
        date: string;
      };
      message: string;
      author: {
        name: string;
      };
    };
    author: {
      name: string;
      avatar_url: string;
    };
  }