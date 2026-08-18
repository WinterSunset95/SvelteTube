{
  description = "SvelteTube";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: flake-utils.lib.eachDefaultSystem (system:
    let
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          nodejs_22
          corepack_22

          svelte-language-server
          typescript-language-server
          tailwindcss-language-server
          vscode-langservers-extracted
        ];

        shellHook = ''
          echo "SvelteTube Dev Environment Loaded";
          echo "Node version: $(node --version)"
        '';
      };
    }
  );
}
