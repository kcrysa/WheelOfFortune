import Octokat from "octokat";

export const REPOSITORY_NAME = "WheelOfFortune";
export const BRANCH_NAME = "db";

export const FILE_NAME = (fileNumber: number) =>
  `interactions${fileNumber}.json`;

export const apiGet = (
  username: string,
  repositoryName: string,
  branch: string,
  name: string,
  callback: Function
) => {
  const repo = new Octokat().repos(username, repositoryName);

  if (name.indexOf(".json") !== -1) {
    repo.contents(name).fetch(
      {
        ref: branch,
      },
      function (err: any, result: any) {
        if (err) return callback(err);
        callback(err, {
          name: name,
          sha: result.sha,
          content: JSON.parse(atob(result.content)),
        });
      }
    );
  } else {
    return callback("File type not supported.");
  }
};

export const apiPost = (
  username: string,
  repositoryName: string,
  branch: string,
  name: string,
  data: any,
  token: string,
  callback: Function
) => {
  const repo = new Octokat({ token: token }).repos(username, repositoryName);

  repo.contents(name).fetch(
    {
      ref: branch,
    },
    function (err: any, result: any) {
      if (err) return callback(err);

      var changes = {
        branch: branch,
        sha: result.sha,
        content: btoa(JSON.stringify(data)),
        message: "db: new interaction",
      };

      repo.contents(name).add(changes, (err: any, res: any) => {
        callback(err, res, name);
      });
    }
  );
};
