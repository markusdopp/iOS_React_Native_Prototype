//
//  ViewController.swift
//  MyReactNativeApp
//
//  Created by Markus Dopp on 16.10.18.
//  Copyright © 2018 Markus Dopp. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {
@IBOutlet weak var lunch: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    @IBAction func ButtonTapped(_ sender: UIButton) {
        NSLog("Hello")
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let mockData:NSDictionary = ["appointments":
            [
                ["name":"lunch", "value":lunch.text!]
            ]
        ]
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "RNHighScores",
            initialProperties: mockData as [NSObject : AnyObject],
            launchOptions: nil
        )
        let vc = UIViewController()
        vc.view = rootView
        self.present(vc, animated: true, completion: nil)
        
    }
    

    
    
}

