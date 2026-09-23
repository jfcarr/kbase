// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="intro.html"><strong aria-hidden="true">1.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="about.html"><strong aria-hidden="true">2.</strong> About</a></span></li><li class="chapter-item expanded "><li class="part-title">Articles</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/dotnet.html"><strong aria-hidden="true">3.</strong> .NET</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/add_settings_dotnet_console.html"><strong aria-hidden="true">3.1.</strong> Add Settings File to .NET Console Application</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/api_key_dotnet_webapi.html"><strong aria-hidden="true">3.2.</strong> API Key in .NET WebAPI Project</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/call_async_from_non_csharp.html"><strong aria-hidden="true">3.3.</strong> Call Async Method from Non-Async Method in C#</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/check_update_dotnet10_project_templates.html"><strong aria-hidden="true">3.4.</strong> Check and Update .NET 10 Project Templates</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/connect_mysql_dotnet.html"><strong aria-hidden="true">3.5.</strong> Connect To MySQL From .NET</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/create_code_behind_razor.html"><strong aria-hidden="true">3.6.</strong> Create Code Behind File for Razor Page In Blazor Application</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/csharp_language_versioning.html"><strong aria-hidden="true">3.7.</strong> C# Language Versioning</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/depend_inject_dotnet.html"><strong aria-hidden="true">3.8.</strong> Dependency Injection in .NET/C#</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/deploy_blazor_webassembly_github_pages.html"><strong aria-hidden="true">3.9.</strong> Deploy Blazor WebAssembly to GitHub Pages</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/determine_path_web_config.html"><strong aria-hidden="true">3.10.</strong> Determine path to web.config at runtime</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/entity_framework.html"><strong aria-hidden="true">3.11.</strong> Entity Framework</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/fluent_ui_config_blazor.html"><strong aria-hidden="true">3.12.</strong> FluentUI Configuration In Blazor Application</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/get_path_executable.html"><strong aria-hidden="true">3.13.</strong> Get Path For Executable</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/install_dotnet_microsoft_feed.html"><strong aria-hidden="true">3.14.</strong> Install .NET From Microsoft Feed in Ubuntu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/manual_install_dotnet_sdk_linux.html"><strong aria-hidden="true">3.15.</strong> Manual Installation of .NET SDK in Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/microservice_notes.html"><strong aria-hidden="true">3.16.</strong> Microservice Notes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/no_frameworks_found.html"><strong aria-hidden="true">3.17.</strong> No Frameworks Were Found error</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/package_publish_nuget.html"><strong aria-hidden="true">3.18.</strong> Package and Publish To NuGet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/remove_dup_list.html"><strong aria-hidden="true">3.19.</strong> Remove Duplicates From List Collection</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/side_dotnet_install.html"><strong aria-hidden="true">3.20.</strong> Side-by-Side .NET Core Installations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/single_file_multi_pub_dotnet.html"><strong aria-hidden="true">3.21.</strong> Single-File / Multi-OS / Multi-Architecture Publishing in .NET</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/support_mat_dotnet_talk.html"><strong aria-hidden="true">3.22.</strong> Supporting Material for &#39;.NET and Linux&#39; tech talk</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/tui_frameworks_dotnet.html"><strong aria-hidden="true">3.23.</strong> TUI Frameworks for .NET</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/wcf_export.html"><strong aria-hidden="true">3.24.</strong> WCF Export</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/web_api_aspnet.html"><strong aria-hidden="true">3.25.</strong> Web API with ASP.NET</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/c_cpp.html"><strong aria-hidden="true">4.</strong> C / C++</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/complex_collection_cpp.html"><strong aria-hidden="true">4.1.</strong> Complex Object Collections in C++</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/enum_scope_cpp.html"><strong aria-hidden="true">4.2.</strong> Enumeration Scoping in C++</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/gdb_gprof.html"><strong aria-hidden="true">4.3.</strong> GDB and GPROF</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/stdio_no_such_file.html"><strong aria-hidden="true">4.4.</strong> stdio.h: No such file or directory</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/database_sql.html"><strong aria-hidden="true">5.</strong> Database / SQL</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/boilerplate_date_def_sql.html"><strong aria-hidden="true">5.1.</strong> Boilerplate Date Definitions for SQL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/condition_aggregate.html"><strong aria-hidden="true">5.2.</strong> Conditions on aggregates in SQL</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/find_dup_row_column.html"><strong aria-hidden="true">5.3.</strong> Find Duplicate Rows By Specific Columns</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/mysql_command_line.html"><strong aria-hidden="true">5.4.</strong> MySQL command line -- quick tips</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/sql_server_linux.html"><strong aria-hidden="true">5.5.</strong> SQL Server in Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/sql_transaction_template.html"><strong aria-hidden="true">5.6.</strong> SQL Transaction Template</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/docker.html"><strong aria-hidden="true">6.</strong> Docker</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/docker_linux.html"><strong aria-hidden="true">6.1.</strong> Docker In Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/mongodb_docker.html"><strong aria-hidden="true">6.2.</strong> MongoDB Quick Start in Docker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/mvs_docker.html"><strong aria-hidden="true">6.3.</strong> MVS Turnkey in Docker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/rabbitmq_docker.html"><strong aria-hidden="true">6.4.</strong> RabbitMQ in Docker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/sql_server_docker.html"><strong aria-hidden="true">6.5.</strong> SQL Server in Docker</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/embedded_iot.html"><strong aria-hidden="true">7.</strong> Embedded and IoT</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/dotnet_iot.html"><strong aria-hidden="true">7.1.</strong> .NET IoT</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/6502_programming_c.html"><strong aria-hidden="true">7.2.</strong> 6502 Programming in C</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/arduino_raspberry_remote_sensor.html"><strong aria-hidden="true">7.3.</strong> Arduino / Raspberry Pi Remote Sensor</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/basic_arduino_dev_linux.html"><strong aria-hidden="true">7.4.</strong> Basic Arduino Uno Dev Setup in Linux (Debian-based)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/command_line_arduino.html"><strong aria-hidden="true">7.5.</strong> Command-Line Arduino</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/esp8266_micropython_oled.html"><strong aria-hidden="true">7.6.</strong> ESP8266 MicroPython Project with OLED</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/implement_rest_nano_rp2040.html"><strong aria-hidden="true">7.7.</strong> Implement a REST Service on a Nano RP2040</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/micropython_esp32.html"><strong aria-hidden="true">7.8.</strong> MicroPython on ESP32</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/online_iot_simulator.html"><strong aria-hidden="true">7.9.</strong> Online IoT/Embedded Simulators</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/programming_avr_pico_c.html"><strong aria-hidden="true">7.10.</strong> Programming Arduino (AVR) and Raspberry Pi Pico (ARM) in C</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/remote_access_rpi.html"><strong aria-hidden="true">7.11.</strong> Remote Access for Raspberry Pi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/sense_hat.html"><strong aria-hidden="true">7.12.</strong> Sense HAT</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/simple_raspberry_dotnet_python.html"><strong aria-hidden="true">7.13.</strong> Simple Raspberry Pi Control With .NET IoT and Python</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/using_uv_esp8266_micropython.html"><strong aria-hidden="true">7.14.</strong> Using UV To Manage a ESP8266 MicroPython Project</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/java.html"><strong aria-hidden="true">8.</strong> Java</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/file_ops_java.html"><strong aria-hidden="true">8.1.</strong> File Operations in Java</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/gradle_quick_start.html"><strong aria-hidden="true">8.2.</strong> Gradle Quick Start</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/java_links.html"><strong aria-hidden="true">8.3.</strong> Java Links</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/maven_example.html"><strong aria-hidden="true">8.4.</strong> Maven Example</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/modify_java_runtime.html"><strong aria-hidden="true">8.5.</strong> Modify default Java runtime in Linux</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/mainframe.html"><strong aria-hidden="true">9.</strong> Mainframe</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/jcl_programming_mvs.html"><strong aria-hidden="true">9.1.</strong> JCL and Programming On the MVS Turnkey System</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/mainframe_emulation_rpi.html"><strong aria-hidden="true">9.2.</strong> Mainframe Emulation on Raspberry Pi Zero</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/php.html"><strong aria-hidden="true">10.</strong> PHP</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/get_started_laravel.html"><strong aria-hidden="true">10.1.</strong> Get Started With Laravel</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/install_php7_xml.html"><strong aria-hidden="true">10.2.</strong> Install php7-xml to avoid utf encode/decode issue</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/pass_value_url_php.html"><strong aria-hidden="true">10.3.</strong> Passing a value in the URL for use by PHP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/php_login_tutorial.html"><strong aria-hidden="true">10.4.</strong> PHP Login Script Tutorial</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/prevent_code_inject_php.html"><strong aria-hidden="true">10.5.</strong> Prevent Code Injection In PHP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/redirect_php.html"><strong aria-hidden="true">10.6.</strong> Redirect in PHP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/slim_framework.html"><strong aria-hidden="true">10.7.</strong> Slim Framework</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/use_value_posted_form.html"><strong aria-hidden="true">10.8.</strong> Use a value from a posted form in PHP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/verbose_php_logging.html"><strong aria-hidden="true">10.9.</strong> Verbose PHP Logging To Web Browser</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/python.html"><strong aria-hidden="true">11.</strong> Python</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/bundle_python_zip.html"><strong aria-hidden="true">11.1.</strong> Bundling a Multiple Module Python Project Into a Zip File</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/check_xml_wellform.html"><strong aria-hidden="true">11.2.</strong> Check an XML file to see if it is well-formed</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/flask.html"><strong aria-hidden="true">11.3.</strong> Flask</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/init_jupyter_uv.html"><strong aria-hidden="true">11.4.</strong> Initialize Jupyter Project with UV</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/pandas_cheat_sheet.html"><strong aria-hidden="true">11.5.</strong> Pandas Cheat Sheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/pip_corp_proxy.html"><strong aria-hidden="true">11.6.</strong> Pip Behind a Corporate Proxy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/python_libraries.html"><strong aria-hidden="true">11.7.</strong> Python Libraries</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/python_optimization_binding.html"><strong aria-hidden="true">11.8.</strong> Python Optimization and Language Binding</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/python_tkinter.html"><strong aria-hidden="true">11.9.</strong> Python Tkinter Examples</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/requirements_python.html"><strong aria-hidden="true">11.10.</strong> Requirements Files for Python</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/single_file_depend_uv.html"><strong aria-hidden="true">11.11.</strong> Single-File Dependency Management in Python Script Using UV</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/version_mismatch_python.html"><strong aria-hidden="true">11.12.</strong> Version Mismatch in Python Package</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/virtual_env_python.html"><strong aria-hidden="true">11.13.</strong> Virtual Environment for Python</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/rust.html"><strong aria-hidden="true">12.</strong> Rust</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/cross_compile_rust.html"><strong aria-hidden="true">12.1.</strong> Cross-Compile Rust, Targeting Windows from Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/publish_crates.html"><strong aria-hidden="true">12.2.</strong> Publish to Crates.io</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/rust_books.html"><strong aria-hidden="true">12.3.</strong> Rust Books (online)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/rust_corporate_proxy.html"><strong aria-hidden="true">12.4.</strong> Rust/Cargo Behind a Corporate Proxy</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="topics/misc.html"><strong aria-hidden="true">13.</strong> Misc</a></span><ol class="section"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/3d_print_cnc.html"><strong aria-hidden="true">13.1.</strong> 3D Printing and CNC</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/amd_ryzen_3_freezing.html"><strong aria-hidden="true">13.2.</strong> AMD Ryzen 3 3200G with Radeon Vega Graphics Keeps Freezing</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/angular_cheat_sheet.html"><strong aria-hidden="true">13.3.</strong> Angular Cheat Sheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/angular_cli.html"><strong aria-hidden="true">13.4.</strong> Angular CLI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/apache_setup_debian_linux.html"><strong aria-hidden="true">13.5.</strong> Apache Setup in Debian/Ubuntu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/bad_owner_permission_ssh.html"><strong aria-hidden="true">13.6.</strong> Bad owner or permissions on ssh config file</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/boot_linux_mint_netbook.html"><strong aria-hidden="true">13.7.</strong> Boot Linux Mint from flash drive on a netbook</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/boot_linux_text_mode.html"><strong aria-hidden="true">13.8.</strong> Boot Linux to text mode</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/cache_resources_imagemagick.html"><strong aria-hidden="true">13.9.</strong> Cache Resources Exhausted in Imagemagick</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/clear_linux_cache.html"><strong aria-hidden="true">13.10.</strong> Clear Linux Cache</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/component_error_virtualbox.html"><strong aria-hidden="true">13.11.</strong> Component Not Found error in VirtualBox</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/compress_dir_tar.html"><strong aria-hidden="true">13.12.</strong> Compress and Extract Entire Directory Tree With Tar</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/config_hddtemp.html"><strong aria-hidden="true">13.13.</strong> Configuration of hddtemp</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/create_iso_terminal.html"><strong aria-hidden="true">13.14.</strong> Create An ISO File From a CD or DVD-ROM Using the Terminal</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/display_grub_menu.html"><strong aria-hidden="true">13.15.</strong> Display GRUB Menu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/find_unique_text_bash.html"><strong aria-hidden="true">13.16.</strong> Find Unique Instances of Text in Bash</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/flash_image_sd.html"><strong aria-hidden="true">13.17.</strong> Flash Disk Image to SD Card</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/install_nodejs.html"><strong aria-hidden="true">13.18.</strong> Install Node.js</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/force_ssl_domain.html"><strong aria-hidden="true">13.19.</strong> Force SSL On Domain</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/generate_thumb_video_audio_ubuntu.html"><strong aria-hidden="true">13.20.</strong> Generating Thumbnails for Video and Audio Files In Ubuntu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/git_tips_tricks.html"><strong aria-hidden="true">13.21.</strong> Git Tips and Tricks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/graphical_sudo.html"><strong aria-hidden="true">13.22.</strong> Graphical sudo</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/hide_website_search.html"><strong aria-hidden="true">13.23.</strong> Hide website from search engines</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/hostname_linux.html"><strong aria-hidden="true">13.24.</strong> Hostname On Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/how_install_bundle_linux.html"><strong aria-hidden="true">13.25.</strong> How to install a .bundle file in Ubuntu Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/hp_laptop_keyboard.html"><strong aria-hidden="true">13.26.</strong> HP Laptop Keyboard Not Working At Boot Start</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/http_status_codes.html"><strong aria-hidden="true">13.27.</strong> HTTP Status Codes</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/install_snapd_debian.html"><strong aria-hidden="true">13.28.</strong> Install Snapd on Debian</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/install_truetype_linux.html"><strong aria-hidden="true">13.29.</strong> Install truetype fonts in Ubuntu Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/list_hardware_debian.html"><strong aria-hidden="true">13.30.</strong> List Hardware Information in Ubuntu and other Debian-based Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/making_color_gif_transparent.html"><strong aria-hidden="true">13.31.</strong> Making Colors in a GIF Transparent</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/manual_install_firefox.html"><strong aria-hidden="true">13.32.</strong> Manually Install Firefox</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/markup_example_revealjs.html"><strong aria-hidden="true">13.33.</strong> Markup and Code-Behind Examples for reveal.js</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/merge_images.html"><strong aria-hidden="true">13.34.</strong> Merge Images</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/migrate_win_linux.html"><strong aria-hidden="true">13.35.</strong> Migrating from Windows to Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/minidlna.html"><strong aria-hidden="true">13.36.</strong> MiniDLNA - A lightweight, simple media server</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/modify_default_folders.html"><strong aria-hidden="true">13.37.</strong> Modify Default Folders in Ubuntu Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/mount_local_dosbox.html"><strong aria-hidden="true">13.38.</strong> Mount local folder as drive C in DOSBox</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/neovim_qt_startup_error.html"><strong aria-hidden="true">13.39.</strong> Neovim Qt Startup Error</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/npm_cheat_sheet.html"><strong aria-hidden="true">13.40.</strong> NPM Cheat Sheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/nt_status_browsing.html"><strong aria-hidden="true">13.41.</strong> NT_STATUS_UNSUCCESSFUL error when browsing machines/shares in Ubuntu Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/pdf_conversion_error.html"><strong aria-hidden="true">13.42.</strong> PDF Conversion Policy Error</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/quarto_special_markup.html"><strong aria-hidden="true">13.43.</strong> Quarto Special Markup</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/query_window_shares_linux.html"><strong aria-hidden="true">13.44.</strong> Query Windows shares from the command line in Ubuntu Linux</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/react_cheat_sheet.html"><strong aria-hidden="true">13.45.</strong> React Cheat Sheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/recursive_file_search.html"><strong aria-hidden="true">13.46.</strong> Recursive File Search</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/rhythmbox_tray_icon.html"><strong aria-hidden="true">13.47.</strong> Rhythmbox tray icon plugin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/rip_dvd_ubuntu.html"><strong aria-hidden="true">13.48.</strong> Rip DVD in Ubuntu</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/root_access_raspberry.html"><strong aria-hidden="true">13.49.</strong> Root Access on Raspberry Pi</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/rsync_backup.html"><strong aria-hidden="true">13.50.</strong> Rsync as a Backup Solution</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/selective_chmod.html"><strong aria-hidden="true">13.51.</strong> Selective chmod for directories and files</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/simple_web_server.html"><strong aria-hidden="true">13.52.</strong> Simple Web Server, Using Python or PHP</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/start_xwin_cygwin.html"><strong aria-hidden="true">13.53.</strong> Start an X Windows session in Cygwin</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/stream_media_linux_xbox.html"><strong aria-hidden="true">13.54.</strong> Stream Media from Ubuntu/Mint Linux to XBox360</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/usb_plugs_cables.html"><strong aria-hidden="true">13.55.</strong> USB Plugs and Cables</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/user_limit_inotify_instances.html"><strong aria-hidden="true">13.56.</strong> User Limit On Inotify Instances</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/using_router_repeater.html"><strong aria-hidden="true">13.57.</strong> Using Your Router As A Wireless Repeater</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/vim_tips_tricks.html"><strong aria-hidden="true">13.58.</strong> Vim Tips and Tricks</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/vuejs_cheat_sheet.html"><strong aria-hidden="true">13.59.</strong> Vue.js Cheat Sheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="articles/web_framework_lib_plugin.html"><strong aria-hidden="true">13.60.</strong> Web Frameworks, Libraries, and Plugins</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="glossary.html">Glossary</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

