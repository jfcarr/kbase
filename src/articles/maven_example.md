# Maven Example

## Steps

Generate project:

```bash
mvn archetype:generate -DgroupId=com.example -DartifactId=my-console-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

Edit pom.xml.

Add compiler source and target versions:

```xml
<properties>
  <maven.compiler.source>21</maven.compiler.source>
  <maven.compiler.target>21</maven.compiler.target>
</properties>
```

Specify the main class:

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-jar-plugin</artifactId>
      <configuration>
        <archive>
          <manifest>
            <addClasspath>true</addClasspath>
            <mainClass>com.example.App</mainClass>
          </manifest>
        </archive>
      </configuration>
    </plugin>
  </plugins>
</build>
```

Build .jar:

```bash
mvn clean package
```

The .jar file is generated inside the target directory. Run it:

```bash
java -jar my-console-app-1.0-SNAPSHOT.jar
```

Output:

```txt
Hello World!
```

## Add a Dependency

```xml
<dependency>
  <groupId>org.json</groupId>
  <artifactId>json</artifactId>
  <version>20250517</version>
</dependency>
```

### Include Dependencies in Jar

> [!TIP]
> If you use this, you no longer need the maven-jar-plugin plugin entry.

```xml
<plugin>
  <artifactId>maven-assembly-plugin</artifactId>
  <executions>
    <execution>
      <phase>package</phase>
      <goals>
        <goal>single</goal>
      </goals>
    </execution>
  </executions>
  <configuration>
    <descriptorRefs>
      <descriptorRef>jar-with-dependencies</descriptorRef>
    </descriptorRefs>
    <archive>
      <manifest>
        <addClasspath>true</addClasspath>
        <mainClass>com.example.App</mainClass>
      </manifest>
    </archive>
  </configuration>
</plugin>
```

## Makefile

```makefile
default:
    @echo 'Targets:'
    @echo '  package   -- Build the .jar file(s)'
    @echo '  list      -- Show .jar file(s)'
    @echo '  run       -- Run the "lite" .jar file (dependencies not included)'
    @echo '  run-full  -- Run the "full" .jar file (dependencies included)'
    
package:
    mvn clean package
    
list:
    cd target; ls -lh *.jar
    
run:
    cd target; java -jar my-console-app-1.0-SNAPSHOT.jar
    
run-full:
    cd target; java -jar my-console-app-1.0-SNAPSHOT-jar-with-dependencies.jar
```

## Complete Updated Pom Example

```xml
<?xml version="1.0"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>my-console-app</artifactId>
    <packaging>jar</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>my-console-app</name>
    <url>http://maven.apache.org</url>
    <dependencies>
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>3.8.1</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.json</groupId>
        <artifactId>json</artifactId>
        <version>20250517</version>
    </dependency>
    </dependencies>
    <properties>
    <maven.compiler.source>21</maven.compiler.source>
    <maven.compiler.target>21</maven.compiler.target>
    </properties>
    <build>
    <plugins>
        <plugin>
        <artifactId>maven-assembly-plugin</artifactId>
        <executions>
            <execution>
            <phase>package</phase>
            <goals>
                <goal>single</goal>
            </goals>
            </execution>
        </executions>
        <configuration>
            <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
            </descriptorRefs>
            <archive>
            <manifest>
                <addClasspath>true</addClasspath>
                <mainClass>com.example.App</mainClass>
            </manifest>
            </archive>
        </configuration>
        </plugin>
    </plugins>
    </build>
</project>
```
