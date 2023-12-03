## Install and serve

1.  Install asdf

    ```
    asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby
    ```

2. Install ruby

   ```
   sudo apt update

   sudo apt install build-essential zlib1g-dev libyaml-dev libssl-dev
   
   asdf install ruby 3.2.2

   asdf local ruby 3.2.2
   ```

3. Serve
    ```
    bundle install
    bundle exec jekyll serve --livereload
    ```
